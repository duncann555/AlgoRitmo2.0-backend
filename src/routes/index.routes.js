import { Router } from "express";
import cancionesRoutes from "./canciones.routes.js";
import usuariosRoutes from "./usuarios.routes.js";
import playlistRoutes from "./playlist.routes.js";


const router = Router();

router.use("/canciones", cancionesRoutes);
router.use("/usuarios", usuariosRoutes);
router.use("/playlist", playlistRoutes);


export default router;
