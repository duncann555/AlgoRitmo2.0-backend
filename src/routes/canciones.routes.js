import { Router } from "express";
import {
  crearCancion,
  listarCanciones,
  obtenerCancionID,
  editarCancionID,
  borrarCancion
} from "../controllers/canciones.controllers.js";

import validarJWT from "../middlewares/validarJWT.js";
import validarRolAdmin from "../middlewares/validarRolAdmin.js";
import validarCancion from "../middlewares/validarCancion.js";
import validarMongoID from "../middlewares/validarMongoID.js";

const router = Router();

// ----------------------------------------
// RUTAS PÚBLICAS
// ----------------------------------------

router.get("/", listarCanciones);

router.get("/:id", validarMongoID, obtenerCancionID);

// ----------------------------------------
// RUTAS PROTEGIDAS (ADMIN)
// ----------------------------------------

router.post(
  "/",
  validarJWT,
  validarRolAdmin,
  validarCancion,
  crearCancion
);

router.put(
  "/:id",
  validarJWT,
  validarRolAdmin,
  validarMongoID,
  validarCancion,
  editarCancionID
);

router.delete(
  "/:id",
  validarJWT,
  validarRolAdmin,
  validarMongoID,
  borrarCancion
);

export default router;
