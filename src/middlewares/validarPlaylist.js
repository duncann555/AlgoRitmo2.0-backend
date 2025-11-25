import { param } from "express-validator";
import validarCampos from "./validarCampos.js";

const validarPlaylist = [
  param("userId")
    .isMongoId()
    .withMessage("El userId debe ser un ID válido de MongoDB"),

  param("cancionId")
    .optional()
    .isMongoId()
    .withMessage("El cancionId debe ser un ID válido de MongoDB"),

  validarCampos,
];

export default validarPlaylist;
