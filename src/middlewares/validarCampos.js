import { validationResult } from "express-validator";

const validarCampos = (req, res, next) => {
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    console.log("❌ Error de validación");
    console.log("Body recibido:", req.body);
    console.log("Errores:", errores.array());

    return res.status(400).json({
      errores: errores.array(),
    });
  }

  next();
};

export default validarCampos;
