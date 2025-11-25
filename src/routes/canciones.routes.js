import { Router } from "express";
import {
  crearCancion,
  listarCanciones,
  obtenerCancionID,
  editarCancionID,
  borrarCancionID,
} from "../controllers/canciones.controllers.js";

const router = Router();

router.route("/")
  .post(crearCancion)      
  .get(listarCanciones);   

router.route("/:id")
  .get(obtenerCancionID)   
  .put(editarCancionID)    
  .delete(borrarCancionID) 

export default router;