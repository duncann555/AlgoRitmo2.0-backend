import jwt from "jsonwebtoken";

const generarJWT = (id, nombre, email, rol) => {
  try {
    const payload = { id, nombre, email, rol };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,   // 🔴 mismo nombre que en validarJWT
      { expiresIn: "2h" }
    );

    return token;
  } catch (error) {
    console.error("Error al generar el token:", error.message);
    throw new Error("Error al generar el token");
  }
};

export default generarJWT;
