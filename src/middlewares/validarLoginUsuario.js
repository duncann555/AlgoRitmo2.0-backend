import { body } from "express-validator";
import validarCampos from "./validarCampos.js";

const validarLoginUsuario = [
  body("email")
    .notEmpty().withMessage("El email es obligatorio")
    .isEmail().withMessage("Debe ser un email válido"),

  body("password")
    .notEmpty().withMessage("La contraseña es obligatoria"),

  validarCampos,
];

export default validarLoginUsuario;
