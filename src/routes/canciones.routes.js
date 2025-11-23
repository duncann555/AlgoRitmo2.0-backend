import { Router } from "express";
import {
  crearCancion,
  listarCanciones,borrarCancionID /*obtenerCancionID, borrarCancionID, editarCancionID */,
} from "../controllers/canciones.controllers.js";

const router = Router();

router.route("/").post(crearCancion).get(listarCanciones);
router.route("/:id").delete(borrarCancionID)

export default router;
