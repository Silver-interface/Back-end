const express = require("express");
const router = express.Router();
const pool = require("../database/database");

router.post("/signin", (req, res) => {
  const { username, password } = req.body;

  pool.query(
    "SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?",
    [username, password],
    (err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error de servidor");
      }

      if (rows.length === 0) {
        return res.status(401).send("Credenciales invalidas");
      }
    }
  );
});
