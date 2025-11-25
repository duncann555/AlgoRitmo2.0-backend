import generarJWT from "../middlewares/generarJWT.js";
import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";

export const registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const existe = await Usuario.findOne({ email });
    if (existe) {
      return res.status(400).json({ mensaje: "El email ya está registrado" });
    }

    const salt = bcrypt.genSaltSync(10);

    const nuevoUsuario = new Usuario({
      nombre,
      email,
      password: bcrypt.hashSync(password, salt),
      rol: "user"
    });

    await nuevoUsuario.save();

    res.status(201).json({
      mensaje: "Usuario registrado correctamente",
      usuario: {
        id: nuevoUsuario._id,
        nombre: nuevoUsuario.nombre,
        email: nuevoUsuario.email
      }
    });

  } catch (error) {
    res.status(500).json({
      mensaje: "Error al registrar",
      error: error.message
    });
  }
};

export const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({ mensaje: "Usuario o contraseña incorrectos" });
    }

    const passwordValido = bcrypt.compareSync(password, usuario.password);
    if (!passwordValido) {
      return res.status(400).json({ mensaje: "Usuario o contraseña incorrectos" });
    }

    // 🔥 ESTA es la parte correcta
    const token = generarJWT(
      usuario._id,
      usuario.nombre,
      usuario.email,
      usuario.rol
    );

    res.status(200).json({
      mensaje: "Login exitoso",
      uid: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
      token
    });

  } catch (error) {
    res.status(500).json({
      mensaje: "Error al loguear",
      error: error.message
    });
  }
};

