const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const pool = require("./conexion");
const indexRouter = require("./routes/index");
const usuarioRouter = require("./routes/usuarios");
const cuentaRouter = require("./routes/cuentas");
const cooperativaRouter = require("./routes/cooperativas");


const app = express();
const port = 3001;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "views")));

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/cuentas", cuentaRouter);
app.use("/cooperativas", cooperativaRouter);



app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, "views")));

module.exports = app;
