import { body } from "express-validator";
import validarCampos from "./validarCampos.js";

const anioActual = new Date().getFullYear();

const validarCancion = [
  body("nombre")
    .notEmpty().withMessage("El nombre es obligatorio")
    .isLength({ min: 3, max: 40 })
    .withMessage("El nombre debe tener entre 3 y 40 caracteres"),

  body("artista")
    .notEmpty().withMessage("El artista es obligatorio")
    .isLength({ min: 3, max: 40 })
    .withMessage("El artista debe tener entre 3 y 40 caracteres"),

  body("categoria")
    .notEmpty().withMessage("La categoría es obligatoria"),

  body("album")
    .notEmpty().withMessage("El álbum es obligatorio")
    .isLength({ min: 2, max: 40 })
    .withMessage("El álbum debe tener entre 2 y 40 caracteres"),

  body("anio")
    .notEmpty().withMessage("El año es obligatorio")
    .isInt({ min: 1900, max: anioActual })
    .withMessage(`El año debe ser válido (entre 1900 y ${anioActual})`),

  body("imagen")
    .notEmpty().withMessage("La imagen es obligatoria")
    .isURL().withMessage("Debe ser una URL válida")
    .matches(/\.(jpg|jpeg|png|webp)$/i)
    .withMessage("Debe ser una imagen jpg, jpeg, png o webp"),

  body("duracion")
    .notEmpty().withMessage("La duración es obligatoria")
    .matches(/^\d{2}:\d{2}$/)
    .withMessage("Debe tener formato mm:ss"),

  validarCampos,
];

export default validarCancion;
