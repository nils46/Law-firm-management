const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require('path');
const route = require('./routes/route');

const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const upload = require('express-fileupload');
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });

app.use(require("./routes/api/followups.routes"));
app.use(require("./routes/api/contacts.routes"));

app.use(express.static(__dirname + '/public'));
app.use("/", require("./routes/crm.routes"));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(upload());

app.use(express.json());
app.use(session({ resave: false, saveUninitialized: true, secret: 'nodedemo' }));
app.use(cookieParser());



app.use('/', route);
app.use(express.json());
app.use("/api", require("./routes/api.leads"));
const leadsApiRoutes = require("./routes/api/leads.routes");
app.use(leadsApiRoutes);


const http = require("http").createServer(app);
const pool = require("./db/pool");

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("❌ DB Connection Failed", err);
  } else {
    console.log("✅ DB Connected:", res.rows[0]);
  }
});


const port = 3000

http.listen(port, () => {
    console.log(`Server running on port ${port}`)
    console.log(`http://localhost:${port}`)
});