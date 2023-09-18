"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFerramenta = exports.putFerramenta = exports.createFerramenta = exports.getFerramenta = exports.getFerramentas = void 0;
const ferramenta_1 = __importDefault(require("../models/ferramenta"));
const getFerramentas = (res) => __awaiter(void 0, void 0, void 0, function* () {
    const ferramentas = yield ferramenta_1.default.findAll();
    res.json({ ferramentas });
});
exports.getFerramentas = getFerramentas;
const getFerramenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const ferramenta = yield ferramenta_1.default.findByPk(id);
        if (ferramenta) {
            res.json(ferramenta);
        }
        else {
            res.status(404).json({
                msg: `No existe un ferramenta con el id ${id}`,
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener el ferramenta. Contactar con el administrador",
        });
    }
});
exports.getFerramenta = getFerramenta;
const createFerramenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ferramenta = yield ferramenta_1.default.create(req.body);
        res.status(201).json(ferramenta);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al crear el ferramenta. Contactar con el administrador",
        });
    }
});
exports.createFerramenta = createFerramenta;
const putFerramenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const ferramenta = yield ferramenta_1.default.findByPk(id);
        if (!ferramenta) {
            return res.status(404).json({
                msg: "No existe un ferramenta con el id " + id,
            });
        }
        yield ferramenta.update(req.body);
        res.json(ferramenta);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error al actualizar el ferramenta. Contactar con el administrador",
        });
    }
    return res.status(500).json({
        msg: "Error inesperado al actualizar el ferramenta",
    });
});
exports.putFerramenta = putFerramenta;
const deleteFerramenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const ferramenta = yield ferramenta_1.default.findOne({
            where: { id },
        });
        if (!ferramenta) {
            return res.status(404).json({
                msg: "No existe un ferramenta con el id " + id,
            });
        }
        yield ferramenta.destroy();
        res.json(ferramenta);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error al eliminar el ferramenta",
        });
    }
    return res.status(500).json({
        msg: "Error inesperado al eliminar el ferramenta",
    });
});
exports.deleteFerramenta = deleteFerramenta;
