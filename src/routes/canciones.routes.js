import { Router } from "express";
import {
  crearCancion,
  listarCanciones,
  obtenerCancionID,
  editarCancionID,
  borrarCancionID,
} from "../controllers/canciones.controllers.js";

const router = Router();

// Rutas generales
router.route("/")
  .post(crearCancion)      // Crear una canción
  .get(listarCanciones);   // Listar todas

// Rutas por ID
router.route("/:id")
  .get(obtenerCancionID)   // Obtener una canción por ID
  .put(editarCancionID)    // Editar una canción por ID
  .delete(borrarCancionID) // Borrar una canción por ID

export default router;
