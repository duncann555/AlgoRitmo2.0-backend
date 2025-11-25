import { body } from "express-validator";
import validarCampos from "./validarCampos.js";

const validarRegistroUsuario = [
 body("nombre")
    .notEmpty().withMessage("El nombre es obligatorio")
    .isLength({ min: 3, max: 30 })
    .withMessage("El nombre debe tener entre 3 y 30 caracteres"),

  body("email")
    .notEmpty().withMessage("El email es obligatorio")
    .isEmail().withMessage("Debe ser un email válido"),

  body("password")
    .notEmpty().withMessage("La contraseña es obligatoria")
    .isLength({ min: 6, max: 20 })
    .withMessage("La contraseña debe tener entre 6 y 20 caracteres"),

  body("confirmarPassword")
    .notEmpty().withMessage("Debe confirmar la contraseña")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Las contraseñas no coinciden");
      }
      return true;
    }),

  validarCampos,
];

export default validarRegistroUsuario;
