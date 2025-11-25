import jwt from "jsonwebtoken";

const validarJWT = (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ mensaje: "No hay token en la petición" });
    }

    // Para soportar "Bearer asd123..."
    const tokenLimpio = token.replace("Bearer ", "");

    const decoded = jwt.verify(tokenLimpio, process.env.SECRET_JWT);

    // Guardamos datos del usuario en la request
    req.usuario = {
      id: decoded.id,
      nombre: decoded.nombre,
      email: decoded.email,
      rol: decoded.rol,
    };

    next();

  } catch (error) {
    console.error(error);
    res.status(401).json({ mensaje: "Token inválido o expirado" });
  }
};

export default validarJWT;
