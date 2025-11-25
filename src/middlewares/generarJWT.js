import jwt from "jsonwebtoken";

const generarJWT = (id, nombre, email, rol) => {
  try {
    const payload = { id, nombre, email, rol };

    const token = jwt.sign(
      payload,
      process.env.SECRET_JWT,   
      { expiresIn: "2h" }       
    );

    return token;
  } catch (error) {
    console.error(error);
    throw new Error("Error al generar el token");
  }
};

export default generarJWT;
