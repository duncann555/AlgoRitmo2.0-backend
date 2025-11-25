const validarRolAdmin = (req, res, next) => {
  console.log("🔍 Rol del usuario:", req.usuario?.rol);

  if (req.usuario?.rol !== "admin") {
    return res
      .status(403)
      .json({ mensaje: "No autorizado (se requiere rol admin)" });
  }
  next();
};

export default validarRolAdmin;
