import { Router } from "express";
import {
  registrarUsuario,
  loginUsuario,
} from "../controllers/usuarios.controllers.js";

import validarRegistroUsuario from "../middlewares/validarRegistroUsuario.js";
import validarLoginUsuario from "../middlewares/validarLoginUsuario.js";

const router = Router();

// Registro de usuario
router.post("/register", validarRegistroUsuario, registrarUsuario);

// Login de usuario
router.post("/login", validarLoginUsuario, loginUsuario);

export default router;
