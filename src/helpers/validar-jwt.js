const validarJWT = (req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      mensaje: "No hay token en la petición",
    });
  }

  // 👇 EXCEPCIÓN PARA TU ADMIN DEL FRONT
  if (token === "ADMIN_ENV_FAKE_TOKEN") {  // mismo string que usás en el front
    req.id = "admin-env";
    req.nombre = "Administrador Env";
    req.rol = "admin";
    return next();
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    req.id = payload.uid;
    req.nombre = payload.nombre;
    req.rol = payload.rol;
    next();
  } catch (error) {
    return res.status(401).json({
      mensaje: "Token no válido",
    });
  }
};
