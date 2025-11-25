import { Router } from "express";
import {
  obtenerPlaylist,
  agregarAPlaylist,
  borrarDePlaylist,
} from "../controllers/playlist.controllers.js";

import validarJWT from "../middlewares/validarJWT.js";
import validarPlaylist from "../middlewares/validarPlaylist.js";

const router = Router();

// -----------------------------
// OBTENER PLAYLIST DEL USUARIO
// -----------------------------
router.get(
  "/:userId",
  validarJWT,      // debe estar logueado
  validarPlaylist, // valida userId (y opcionalmente ownership)
  obtenerPlaylist
);

// -----------------------------
// AGREGAR CANCIÓN A PLAYLIST
// -----------------------------
router.post(
  "/:userId/agregar/:cancionId",
  validarJWT,
  validarPlaylist, // valida userId + cancionId
  agregarAPlaylist
);

// -----------------------------
// BORRAR CANCIÓN DE PLAYLIST
// -----------------------------
router.delete(
  "/:userId/borrar/:cancionId",
  validarJWT,
  validarPlaylist,
  borrarDePlaylist
);

export default router;
