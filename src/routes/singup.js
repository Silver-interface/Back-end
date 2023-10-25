const express = require("express");
const router = express.Router();
const pool = require("../database/database");

router.post("/signup", async (req, res) => {
  const { nombre, apellido, tipo_documento, documento, correo, contraseña } =
    req.body;

  try {
    const result = await pool.query(
      "INSERT INTO usuarios (NOMBRE_USUARIO, APELLIDO_USUARIO, TIPO_DOCUMENTO, DOCUMENTO, CORREO, CONTRASEÑA) VALUES (?, ?, ?, ?, ?, ?)",
      [nombre, apellido, tipo_documento, documento, correo, contraseña]
    );

    res.send("Usuario registrado correctamente");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al registrar el usuario");
  }
});

module.exports = router;
