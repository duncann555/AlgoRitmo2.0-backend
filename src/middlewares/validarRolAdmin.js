const validarRolAdmin = (req, res, next) => {
  if (req.usuario?.rol !== "admin") {
    return res.status(403).json({ mensaje: "No autorizado (se requiere rol admin)" });
  }
  next();
};

export default validarRolAdmin;
