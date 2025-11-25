import { Router } from "express";
import {
  crearCancion,
  listarCanciones,
  obtenerCancionID,
  editarCancionID,
  borrarCancionID,
} from "../controllers/canciones.controllers.js";
import validarJWT from "../helpers/validar-jwt.js"; // Importar el middleware

const router = Router();

router.route("/")
  .post(validarJWT, crearCancion) // <--- ACÁ PROTEGEMOS
  .get(listarCanciones);

router.route("/:id")
  .get(obtenerCancionID)
  .put(validarJWT, editarCancionID) // <--- ACÁ TAMBIÉN
  .delete(validarJWT, borrarCancionID); // <--- Y ACÁ

export default router;