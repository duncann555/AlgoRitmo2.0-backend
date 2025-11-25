import Usuario from "../models/usuario.js";
import jwt from "jsonwebtoken"; // 🔑 Importante: Librería para crear el pase VIP

// --- REGISTRO ---
export const registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    // 1. Validar si ya existe
    const existe = await Usuario.findOne({ email });
    if (existe) {
      return res.status(400).json({
        mensaje: "El email ya está registrado",
      });
    }

    // 2. Crear el usuario nuevo
    const nuevoUsuario = new Usuario({ nombre, email, password });
    
    // 3. Guardar en DB
    await nuevoUsuario.save();

    // 4. Responder (Sin token, el usuario tiene que loguearse después)
    res.status(201).json({
      mensaje: "Usuario registrado correctamente",
      usuario: {
        id: nuevoUsuario._id,
        nombre: nuevoUsuario.nombre,
        email: nuevoUsuario.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al registrar usuario",
      error: error.message,
    });
  }
};

// --- LOGIN ---
export const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Buscar usuario
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    // 2. Verificar contraseña (Texto plano por ahora)
    // ⚠️ OJO: Idealmente acá usarías bcrypt.compare(password, usuario.password)
    if (usuario.password !== password) {
      return res.status(400).json({ mensaje: "Contraseña incorrecta" });
    }

    // 3. GENERAR EL TOKEN (La magia) ✨
    // Guardamos adentro los datos clave para que el Front sepa quién es y su Rol
    const token = jwt.sign(
      {
        uid: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol // Fundamental para tu botón de Admin
      },
      process.env.SECRET_JWT, // La firma secreta del .env
      { expiresIn: "7d" } // Vence en una semana
    );

    // 4. Responder con el Token y el Usuario
    res.status(200).json({
      mensaje: "Login exitoso",
      token: token, // <--- Acá viaja la entrada
      usuario: {
        _id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al iniciar sesión",
      error: error.message,
    });
  }
};