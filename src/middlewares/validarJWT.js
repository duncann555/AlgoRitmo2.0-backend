import jwt from "jsonwebtoken";

const validarJWT = (req, res, next) => {
  // Se espera: Authorization: Bearer <token>
  const token = req.header("Authorization")?.replace("Bearer ", "");

  // 🟡 Caso especial: admin del front sin token (modo panel admin local)
  if (!token) {
    if (req.header("x-admin-front") === "true") {
      req.usuario = { rol: "admin", nombre: "AdminFront" };
      return next();
    }

    return res.status(401).json({ mensaje: "No hay token en la petición" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Opcional: log suave
    console.log("✅ JWT válido para usuario:", payload.email || payload.id);

    req.usuario = payload;
    next();
  } catch (error) {
    console.log("❌ Error en validarJWT:", error.message);
    return res.status(401).json({ mensaje: "Token no válido" });
  }
};

export default validarJWT;
