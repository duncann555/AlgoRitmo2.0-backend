import { validationResult } from "express-validator";

const validarCampos = (req, res, next) => {
  const errores = validationResult(req);

  if (!errores.isEmpty()) {

    console.log("❌ ERROR VALIDACIÓN EN /api/canciones:");
    console.log("Body recibido:", req.body);
    console.log("Errores detectados:", errores.array());

    return res.status(400).json({
      errores: errores.array(),
    });
  }

  next();
};

export default validarCampos;
