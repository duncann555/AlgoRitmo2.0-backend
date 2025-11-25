import bcrypt from "bcrypt";
import generarJWT from "../middlewares/generarJWT.js";
import Usuario from "../models/usuario.js";

// ============================
// REGISTRO
// ============================
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
      rol: "user",
    });

    await nuevoUsuario.save();

    return res.status(201).json({
      mensaje: "Usuario registrado correctamente",
      usuario: {
        id: nuevoUsuario._id,
        nombre: nuevoUsuario.nombre,
        email: nuevoUsuario.email,
        rol: nuevoUsuario.rol,
      },
    });
  } catch (error) {
    console.error("Error al registrar usuario:", error.message);
    return res.status(500).json({
      mensaje: "Error al registrar",
      error: error.message,
    });
  }
};

// ============================
// LOGIN
// ============================
export const loginUsuario = async (req, res) => {
  console.log("BODY RECIBIDO EN LOGIN:", req.body);

  try {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res
        .status(400)
        .json({ mensaje: "Usuario o contraseña incorrectos" });
    }

    const passwordValido = bcrypt.compareSync(password, usuario.password);
    if (!passwordValido) {
      return res
        .status(400)
        .json({ mensaje: "Usuario o contraseña incorrectos" });
    }

    // Generar JWT con los datos clave
    const token = generarJWT(
      usuario._id,
      usuario.nombre,
      usuario.email,
      usuario.rol
    );

    return res.status(200).json({
      mensaje: "Login exitoso",
      uid: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
      token,
    });
  } catch (error) {
    console.error("Error al loguear usuario:", error.message);
    return res.status(500).json({
      mensaje: "Error al loguear",
      error: error.message,
    });
  }
};
