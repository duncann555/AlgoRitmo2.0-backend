import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt"; // Importamos bcrypt
import generarJWT from "../helpers/jwt.js"; // Importamos el generador

export const registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const existe = await Usuario.findOne({ email });
    if (existe) {
      return res.status(400).json({ mensaje: "El email ya está registrado" });
    }

    const nuevoUsuario = new Usuario({ nombre, email, password });

    // 1. Encriptar contraseña (Salt genera aleatoriedad)
    const salt = bcrypt.genSaltSync(10);
    nuevoUsuario.password = bcrypt.hashSync(password, salt);

    await nuevoUsuario.save();

    res.status(201).json({
      mensaje: "Usuario registrado correctamente",
      usuario: { id: nuevoUsuario._id, email: nuevoUsuario.email },
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al registrar", error: error.message });
  }
};

export const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });

    // Validaciones básicas
    if (!usuario) {
      return res.status(400).json({ mensaje: "Usuario o contraseña incorrectos" });
    }

    // 2. Comparar contraseña encriptada con la que mandan
    const passwordValido = bcrypt.compareSync(password, usuario.password);
    if (!passwordValido) {
      return res.status(400).json({ mensaje: "Usuario o contraseña incorrectos" });
    }

    // 3. Generar el Token
    const token = await generarJWT(usuario._id, usuario.nombre);

    res.status(200).json({
      mensaje: "Login exitoso",
      uid: usuario._id,
      nombre: usuario.nombre,
      token: token, // Mandamos el token al front
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al loguear", error: error.message });
  }
};