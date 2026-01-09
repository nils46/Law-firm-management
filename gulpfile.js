// Only make changes if you really know what you're doing in gulpfile
const { series, src, dest, parallel, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const browsersync = require("browser-sync");
const concat = require("gulp-concat");
const CleanCSS = require("gulp-clean-css");
const del = require("del");
const fileinclude = require("gulp-file-include");
const newer = require("gulp-newer");
const rename = require("gulp-rename");
const rtlcss = require("gulp-rtlcss");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");

const paths = {
    baseDistAssets: "public/",           // build assets directory
    baseSrcAssets: "assets/",             // source assets directory
    pluginFile: require("./plugins.config"),  // Import the plugins list
};

// Copying Third Party Plugins Assets
const plugins = function () {
    const out = paths.baseDistAssets + "vendor/";

    paths.pluginFile.forEach(({ name, vendorsJS, vendorCSS, vendorFonts, assets, fonts, font, media, img, images, webfonts }) => {

        const handleError = (label) => (err) => {
            const shortMsg = err.message.split('\n')[0];
            console.error(`\n${label} - ${shortMsg}`);
            throw new Error(`${label} failed`);
        };

        if (vendorsJS) {
            src(vendorsJS)
                .on('error', handleError('vendorsJS'))
                .pipe(concat("vendor.min.js"))
                .pipe(dest(paths.baseDistAssets + "js/"));
        }

        if (vendorCSS) {
            src(vendorCSS)
                .pipe(concat("vendor.min.css"))
                .on('error', handleError('vendorCSS'))
                .pipe(dest(paths.baseDistAssets + "css/"));
        }

        if (vendorFonts) {
            src(vendorFonts)
                .on('error', handleError('vendorFonts'))
                .pipe(dest(paths.baseDistAssets + "css/fonts/"));
        }

        if (assets) {
            src(assets)
                .on('error', handleError('assets'))
                .pipe(dest(`${out}${name}/`));
        }

        if (img) {
            src(img)
                .on('error', handleError('img'))
                .pipe(dest(`${out}${name}/`));
        }

        if (images) {
            src(images)
                .on('error', handleError('images'))
                .pipe(dest(`${out}${name}/images/`));
        }

        if (media) {
            src(media)
                .on('error', handleError('media'))
                .pipe(dest(`${out}${name}/`));
        }

        if (fonts) {
            src(fonts)
                .on('error', handleError('fonts'))
                .pipe(dest(`${out}${name}/`));
        }

        if (font) {
            src(font)
                .on('error', handleError('font'))
                .pipe(dest(`${out}${name}/`));
        }

        if (webfonts) {
            src(webfonts)
                .on('error', handleError('webfonts'))
                .pipe(dest(`${out}${name}/`));
        }
    });

    return Promise.resolve();
};

const data = function () {
    const outpdf = paths.baseDistAssets + "pdf/";
    src([paths.baseSrcAssets + "pdf/**/*"])
        .pipe(dest(outpdf));

    const out = paths.baseDistAssets + "data/";
    return src([paths.baseSrcAssets + "data/**/*"])
        .pipe(dest(out));
};

const fonts = function () {
    const out = paths.baseDistAssets + "fonts/";
    return src([paths.baseSrcAssets + "fonts/**/*"])
        .pipe(newer(out))
        .pipe(dest(out));
};

const images = function () {
    const out = paths.baseDistAssets + "images";
    return src(paths.baseSrcAssets + "images/**/*")
        .pipe(dest(out));
};

const javascript = function () {
    const out = paths.baseDistAssets + "js/";
    return src(paths.baseSrcAssets + "js/**/*.js")
        .pipe(uglify())
        .pipe(dest(out));
};

const scss = function () {
    const out = paths.baseDistAssets + "css/";
    return src(paths.baseSrcAssets + "scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({ overrideBrowserslist: ["last 2 versions"] }))
        .pipe(dest(out))
        .pipe(CleanCSS())
        .pipe(rename({ suffix: ".min" }))
        .pipe(sourcemaps.write("./"))
        .pipe(dest(out));
};

const rtl = function () {
    const out = paths.baseDistAssets + "css/";
    return src(paths.baseSrcAssets + "scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({ overrideBrowserslist: ["last 2 versions"] }))
        .pipe(rtlcss())
        .pipe(rename({ suffix: "-rtl" }))
        .pipe(dest(out))
        .pipe(CleanCSS())
        .pipe(rename({ suffix: ".min" }))
        .pipe(sourcemaps.write("./"))
        .pipe(dest(out));
};

const reloadBrowserSync = function (done) {
    browsersync.reload();
    done();
};

// Warning not show
process.removeAllListeners('warning');

const clean = function () {
    return del(paths.baseDist);
};

function watchFiles() {
    watch(paths.baseSrcAssets + "data/**/*", series(data, reloadBrowserSync));
    watch(paths.baseSrcAssets + "images/**/*", series(images, reloadBrowserSync));
    watch([paths.baseSrcAssets + "js/**/*.js", "!" + paths.baseSrcAssets + "js/maps/*"], series(javascript, reloadBrowserSync));
    watch(paths.baseSrcAssets + "scss/**/*.scss", series(scss, reloadBrowserSync));
}

exports.clean = series(
    clean,
);

exports.default = series(
    plugins,
    parallel(data, images, fonts, javascript, scss, rtl),
    parallel(watchFiles)
);

exports.build = series(
    clean,
    plugins,
    parallel(data, images, fonts, javascript, scss, rtl)
);