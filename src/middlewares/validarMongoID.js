import { param } from "express-validator";
import validarCampos from "./validarCampos.js";

const validarMongoID = [
  param("id")
    .isMongoId()
    .withMessage("El ID no corresponde a un formato válido de MongoDB"),
  validarCampos,
];

export default validarMongoID;
