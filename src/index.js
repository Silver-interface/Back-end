const express = require("express");

//inicializacion
const app = express();
const morgan = require("morgan");

//configuracion
app.set("port", process.env.PORT || 3000);

//Midleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Rutas
app.use(require("./routes"));
app.use(require("./routes/singup"));
//app.use(require("./routes/login"));

//Inicio de servidor
app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port"));
});
