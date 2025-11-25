import { Router } from "express";
import {
  obtenerPlaylist,
  agregarAPlaylist,
  borrarDePlaylist,
} from "../controllers/playlist.controllers.js";

const router = Router();

router.get("/:userId", obtenerPlaylist);

router.post("/:userId/agregar/:cancionId", agregarAPlaylist);

router.delete("/:userId/borrar/:cancionId", borrarDePlaylist);

export default router;
