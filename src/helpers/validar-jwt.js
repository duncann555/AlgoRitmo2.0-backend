import jwt from "jsonwebtoken";

const validarJWT = (req, res, next) => {
  // Vamos a pedir el token en los headers con la key "x-token"
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      mensaje: "No hay token en la petición",
    });
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    // Guardamos los datos del usuario en la request por si los necesitamos luego
    req.id = payload.uid;
    req.nombre = payload.nombre;
    
    next(); // Todo joya, pasá.
  } catch (error) {
    return res.status(401).json({
      mensaje: "Token no válido",
    });
  }
};

export default validarJWT;