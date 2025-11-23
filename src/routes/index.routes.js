import { Router } from "express";
import cancionesRoutes from "./canciones.routes.js"

const router = Router()

router.use('/canciones/', cancionesRoutes)

export default router
