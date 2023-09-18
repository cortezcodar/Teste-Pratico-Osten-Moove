import { Router } from "express";
import {
    deleteFerramenta,
    getFerramenta,
    getFerramentas,
    createFerramenta,
    putFerramenta,
    reservarFerramenta,
} from "../controllers/ferramenta";

const router = Router();

router.get("/", getFerramentas);
router.get("/:id", getFerramenta);
router.post("/", createFerramenta);
router.put("/:id", putFerramenta);
router.put("/:id/reservar", reservarFerramenta);
router.delete("/:id", deleteFerramenta);

export default router;
