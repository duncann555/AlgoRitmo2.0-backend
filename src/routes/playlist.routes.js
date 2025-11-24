import { Router } from "express";
import {
  obtenerPlaylist,
  agregarAPlaylist,
  borrarDePlaylist,
} from "../controllers/playlist.controllers.js";

const router = Router();

// Obtener playlist
router.get("/:userId", obtenerPlaylist);

// Agregar canción
router.post("/:userId/agregar/:cancionId", agregarAPlaylist);

// Borrar canción
router.delete("/:userId/borrar/:cancionId", borrarDePlaylist);

export default router;
