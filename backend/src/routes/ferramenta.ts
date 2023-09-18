import { Router } from "express";
import {
    deleteFerramenta,
    getFerramentaId,
    createFerramenta,
    updateFerramenta,
    reservarFerramenta,
    listFerramentas,
} from "../controllers/ferramenta";

const router = Router();

router.get("/ferramentas", listFerramentas);
router.get("/ferramentas/:id", getFerramentaId);
router.post("/ferramentas/", createFerramenta);
router.put("/ferramentas/:id", updateFerramenta);
router.put("/ferramentas/:id/reservar", reservarFerramenta);
router.delete("/ferramentas/:id", deleteFerramenta);

export default router;
