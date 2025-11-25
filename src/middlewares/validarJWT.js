import jwt from "jsonwebtoken";

const validarJWT = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  // 1) ADMIN DEL FRONT SIN TOKEN
  if (!token) {
    if (req.header("x-admin-front") === "true") {
      req.usuario = { rol: "admin", nombre: "AdminFront" };
      return next();
    }
    return res.status(401).json({ mensaje: "No hay token en la petición" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = payload;
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: "Token no válido" });
  }
};

export default validarJWT;
