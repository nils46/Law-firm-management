const express = require('express');
const route = express.Router();


route.get('/form-select', (req, res, next) => {
    res.render('form-select', { title: 'Form Select' });
});

route.get('/charts-apex-timeline', (req, res, next) => {
    res.render('charts-apex-timeline', { title: 'Apex Timeline Chart' });
});
// CONTACTS LIST
route.get("/crm/contacts", (req, res) => {
  res.render("crm/contacts", { title: "Contacts" });
});

// CREATE CONTACT
route.get("/crm/contacts/new", (req, res) => {
  res.render("crm/contact-create", { title: "Create Contact" });
});

route.get('/layouts-detached', (req, res, next) => {
    res.render('layouts-detached', { title: 'Detached Layout' });
});

route.get('/ui-utilities', (req, res, next) => {
    res.render('ui-utilities', { title: 'Utilities' });
});

route.get('/layouts-full', (req, res, next) => {
    res.render('layouts-full', { title: 'Full Layout' });
});

route.get('/pages-faq', (req, res, next) => {
    res.render('pages-faq', { title: 'FAQ' });
});

route.get('/charts-apex-line', (req, res, next) => {
    res.render('charts-apex-line', { title: 'Apex Line Charts' });
});

route.get('/auth-createpw', (req, res, next) => {
    res.render('auth-createpw', { title: 'Create Password' });
});

route.get('/extended-dragula', (req, res, next) => {
    res.render('extended-dragula', { title: 'Dragula' });
});

route.get('/ui-scrollspy', (req, res, next) => {
    res.render('ui-scrollspy', { title: 'Scrollspy' });
});

route.get('/charts-apex-bubble', (req, res, next) => {
    res.render('charts-apex-bubble', { title: 'Apex Bubble Charts' });
});

route.get('/apps-invoice-details', (req, res, next) => {
    res.render('apps-invoice-details', { title: 'Invoice Detail' });
});

route.get('/pages-pricing', (req, res, next) => {
    res.render('pages-pricing', { title: 'Pricing One' });
});

route.get('/icons-tabler', (req, res, next) => {
    res.render('icons-tabler', { title: 'Tabler Icons' });
});

route.get('/apps-kanban', (req, res, next) => {
    res.render('apps-kanban', { title: 'Kanban Board' });
});

route.get('/apps-user-profile', (req, res, next) => {
    res.render('apps-user-profile', { title: 'User Profile' });
});

route.get('/ui-accordions', (req, res, next) => {
    res.render('ui-accordions', { title: 'Accordions' });
});

route.get('/charts-apex-polar-area', (req, res, next) => {
    res.render('charts-apex-polar-area', { title: 'Apex Polar Area Charts' });
});

route.get('/ui-avatars', (req, res, next) => {
    res.render('ui-avatars', { title: 'Avatars' });
});

route.get('/ui-pagination', (req, res, next) => {
    res.render('ui-pagination', { title: 'Pagination' });
});

route.get('/apps-task-details', (req, res, next) => {
    res.render('apps-task-details', { title: 'Task Details' });
});

route.get('/ui-popovers', (req, res, next) => {
    res.render('ui-popovers', { title: 'Popovers' });
});

route.get('/ui-breadcrumb', (req, res, next) => {
    res.render('ui-breadcrumb', { title: 'Breadcrumb' });
});

route.get('/ui-grid', (req, res, next) => {
    res.render('ui-grid', { title: 'Grid System' });
});

route.get('/auth-login', (req, res, next) => {
    res.render('auth-login', { title: 'Log In' });
});

route.get('/layouts-horizontal', (req, res, next) => {
    res.render('layouts-horizontal', { title: 'Horizontal Layout' });
});

route.get('/layouts-compact', (req, res, next) => {
    res.render('layouts-compact', { title: 'Compact Layout' });
});

route.get('/error-401', (req, res, next) => {
    res.render('error-401', { title: 'Error 401' });
});

route.get('/auth-lock-screen', (req, res, next) => {
    res.render('auth-lock-screen', { title: 'Lock Screen' });
});

route.get('/tables-datatable', (req, res, next) => {
    res.render('tables-datatable', { title: 'Datatable Tables' });
});

route.get('/', (req, res, next) => {
    res.render('index', { title: 'Dashboard' });
});

route.get('/charts-apex-scatter', (req, res, next) => {
    res.render('charts-apex-scatter', { title: 'Apex Scatter Charts' });
});

route.get('/auth-register', (req, res, next) => {
    res.render('auth-register', { title: 'Sign Up' });
});

route.get('/charts-apex-radialbar', (req, res, next) => {
    res.render('charts-apex-radialbar', { title: 'Apex RadialBar Charts' });
});

route.get('/apps-email', (req, res, next) => {
    res.render('apps-email', { title: 'Email' });
});

route.get('/charts-apex-heatmap', (req, res, next) => {
    res.render('charts-apex-heatmap', { title: 'Apex Heatmap Charts' });
});

route.get('/ui-notifications', (req, res, next) => {
    res.render('ui-notifications', { title: 'Notifications' });
});

route.get('/ui-modals', (req, res, next) => {
    res.render('ui-modals', { title: 'Modals' });
});

route.get('/pages-starter', (req, res, next) => {
    res.render('pages-starter', { title: 'Starter Page' });
});

route.get('/error-service-unavailable', (req, res, next) => {
    res.render('error-service-unavailable', { title: 'Error 408' });
});

route.get('/form-editors', (req, res, next) => {
    res.render('form-editors', { title: 'Editors' });
});

route.get('/ui-embed-video', (req, res, next) => {
    res.render('ui-embed-video', { title: 'Embed Video' });
});

route.get('/ui-cards', (req, res, next) => {
    res.render('ui-cards', { title: 'Cards' });
});

route.get('/auth-logout', (req, res, next) => {
    res.render('auth-logout', { title: 'Log Out' });
});

route.get('/apps-calendar', (req, res, next) => {
    res.render('apps-calendar', { title: 'Calendar' });
});

route.get('/ui-ratios', (req, res, next) => {
    res.render('ui-ratios', { title: 'Ratio Video' });
});

route.get('/icons-remix', (req, res, next) => {
    res.render('icons-remix', { title: 'Remixicon' });
});

route.get('/ui-collapse', (req, res, next) => {
    res.render('ui-collapse', { title: 'Carousel' });
});

route.get('/ui-placeholders', (req, res, next) => {
    res.render('ui-placeholders', { title: 'Placeholders' });
});

route.get('/charts-apex-mixed', (req, res, next) => {
    res.render('charts-apex-mixed', { title: 'Apex Mixed Charts' });
});

route.get('/form-wizard', (req, res, next) => {
    res.render('form-wizard', { title: 'Form Wizard' });
});

route.get('/charts-apex-pie', (req, res, next) => {
    res.render('charts-apex-pie', { title: 'Apex Pie Charts' });
});

route.get('/layouts-icon-view', (req, res, next) => {
    res.render('layouts-icon-view', { title: 'Icon View Layout' });
});

route.get('/apps-invoices', (req, res, next) => {
    res.render('apps-invoices', { title: 'Invoices' });
});

route.get('/widgets', (req, res, next) => {
    res.render('widgets', { title: 'Widgets' });
});

route.get('/maps-leaflet', (req, res, next) => {
    res.render('maps-leaflet', { title: 'Leaflet Maps' });
});

route.get('/charts-apex-bar', (req, res, next) => {
    res.render('charts-apex-bar', { title: 'Apex Bar Charts' });
});

route.get('/tables-gridjs', (req, res, next) => {
    res.render('tables-gridjs', { title: 'Grid Js Tables' });
});

route.get('/ui-tabs', (req, res, next) => {
    res.render('ui-tabs', { title: 'Tabs' });
});

route.get('/charts-apex-funnel', (req, res, next) => {
    res.render('charts-apex-funnel', { title: 'Apex Funnel Charts' });
});

route.get('/form-validation', (req, res, next) => {
    res.render('form-validation', { title: 'Form Validation' });
});

route.get('/error-404', (req, res, next) => {
    res.render('error-404', { title: 'Error 404' });
});

route.get('/charts-apex-column', (req, res, next) => {
    res.render('charts-apex-column', { title: 'Apex Column Charts' });
});

route.get('/ui-offcanvas', (req, res, next) => {
    res.render('ui-offcanvas', { title: 'Offcanvas' });
});

route.get('/form-inputmask', (req, res, next) => {
    res.render('form-inputmask', { title: 'Form Inputmask' });
});

route.get('/charts-apex-treemap', (req, res, next) => {
    res.render('charts-apex-treemap', { title: 'Apex Treemap Charts' });
});

route.get('/apps-projects', (req, res, next) => {
    res.render('apps-projects', { title: 'Projects' });
});

route.get('/ui-alerts', (req, res, next) => {
    res.render('ui-alerts', { title: 'Alerts' });
});

route.get('/charts-apex-slope', (req, res, next) => {
    res.render('charts-apex-slope', { title: 'Apex Slope Charts' });
});

route.get('/pages-terms-conditions', (req, res, next) => {
    res.render('pages-terms-conditions', { title: 'Terms & Conditions' });
});

route.get('/pages-coming-soon', (req, res, next) => {
    res.render('pages-coming-soon', { title: 'Coming Soon' });
});

route.get('/extended-sweetalerts', (req, res, next) => {
    res.render('extended-sweetalerts', { title: 'Sweet Alert 2' });
});

route.get('/layouts-fullscreen', (req, res, next) => {
    res.render('layouts-fullscreen', { title: 'Fullscreen Layout' });
});

route.get('/maps-vector', (req, res, next) => {
    res.render('maps-vector', { title: 'Vector Maps' });
});

route.get('/form-elements', (req, res, next) => {
    res.render('form-elements', { title: 'Form Elements' });
});

route.get('/ui-links', (req, res, next) => {
    res.render('ui-links', { title: 'Links' });
});

route.get('/error-500', (req, res, next) => {
    res.render('error-500', { title: 'Error 500' });
});

route.get('/ui-dropdowns', (req, res, next) => {
    res.render('ui-dropdowns', { title: 'Dropdowns' });
});

route.get('/ui-spinners', (req, res, next) => {
    res.render('ui-spinners', { title: 'Spinners' });
});

route.get('/apps-file-manager', (req, res, next) => {
    res.render('apps-file-manager', { title: 'File Manager' });
});

route.get('/form-layouts', (req, res, next) => {
    res.render('form-layouts', { title: 'Form Layouts' });
});

route.get('/extended-ratings', (req, res, next) => {
    res.render('extended-ratings', { title: 'Ratings' });
});

route.get('/form-range-slider', (req, res, next) => {
    res.render('form-range-slider', { title: 'Range Slider' });
});

route.get('/apps-invoice-create', (req, res, next) => {
    res.render('apps-invoice-create', { title: 'Create Invoice' });
});

route.get('/form-fileuploads', (req, res, next) => {
    res.render('form-fileuploads', { title: 'File Uploads' });
});

route.get('/ui-typography', (req, res, next) => {
    res.render('ui-typography', { title: 'Typography' });
});

route.get('/ui-badges', (req, res, next) => {
    res.render('ui-badges', { title: 'Badges' });
});

route.get('/error-404-alt', (req, res, next) => {
    res.render('error-404-alt', { title: 'Error 404' });
});

route.get('/ui-tooltips', (req, res, next) => {
    res.render('ui-tooltips', { title: 'Tooltips' });
});

route.get('/error-400', (req, res, next) => {
    res.render('error-400', { title: 'Error 400' });
});

route.get('/charts-apex-sparklines', (req, res, next) => {
    res.render('charts-apex-sparklines', { title: 'Apex Sparklines Charts' });
});

route.get('/charts-apex-boxplot', (req, res, next) => {
    res.render('charts-apex-boxplot', { title: 'Apex Boxplot Chart' });
});

route.get('/layouts-hover', (req, res, next) => {
    res.render('layouts-hover', { title: 'Hover Layout' });
});

route.get('/auth-login-pin', (req, res, next) => {
    res.render('auth-login-pin', { title: 'Login with Pin' });
});

route.get('/maps-google', (req, res, next) => {
    res.render('maps-google', { title: 'Google Maps' });
});

route.get('/ui-buttons', (req, res, next) => {
    res.render('ui-buttons', { title: 'Buttons' });
});

route.get('/pages-maintenance', (req, res, next) => {
    res.render('pages-maintenance', { title: 'Maintenance Page' });
});

route.get('/auth-recoverpw', (req, res, next) => {
    res.render('auth-recoverpw', { title: 'Reset Password' });
});

route.get('/apps-tickets', (req, res, next) => {
    res.render('apps-tickets', { title: 'Tickets' });
});

route.get('/charts-apex-candlestick', (req, res, next) => {
    res.render('charts-apex-candlestick', { title: 'Apex Candlestick Charts' });
});

route.get('/charts-apex-radar', (req, res, next) => {
    res.render('charts-apex-radar', { title: 'Apex Radar Charts' });
});

route.get('/charts-apex-area', (req, res, next) => {
    res.render('charts-apex-area', { title: 'Apex Area Chart' });
});

route.get('/form-picker', (req, res, next) => {
    res.render('form-picker', { title: 'Form Picker' });
});

route.get('/apps-user-contacts', (req, res, next) => {
    res.render('apps-user-contacts', { title: 'User Contact' });
});

route.get('/pages-timeline', (req, res, next) => {
    res.render('pages-timeline', { title: 'Timeline' });
});

route.get('/tables-basic', (req, res, next) => {
    res.render('tables-basic', { title: 'Basic Tables' });
});

route.get('/ui-carousel', (req, res, next) => {
    res.render('ui-carousel', { title: 'Carousel' });
});

route.get('/extended-scrollbar', (req, res, next) => {
    res.render('extended-scrollbar', { title: 'Scrollbar' });
});

route.get('/error-403', (req, res, next) => {
    res.render('error-403', { title: 'Error 403' });
});

route.get('/apps-chat', (req, res, next) => {
    res.render('apps-chat', { title: 'Chat' });
});

route.get('/ui-list-group', (req, res, next) => {
    res.render('ui-list-group', { title: 'List Group' });
});

route.get('/auth-confirm-mail', (req, res, next) => {
    res.render('auth-confirm-mail', { title: 'Confirm Mail' });
});

route.get('/icons-solar', (req, res, next) => {
    res.render('icons-solar', { title: 'Solar Icons' });
});

route.get('/ui-progress', (req, res, next) => {
    res.render('ui-progress', { title: 'Progress' });
});


module.exports = route;