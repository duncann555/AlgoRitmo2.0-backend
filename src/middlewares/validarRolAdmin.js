const validarRolAdmin = (req, res, next) => {
  if (!req.usuario || req.usuario.rol !== "admin") {
    return res.status(403).json({ mensaje: "No tienes permisos de administrador" });
  }

  next();
};

export default validarRolAdmin;
