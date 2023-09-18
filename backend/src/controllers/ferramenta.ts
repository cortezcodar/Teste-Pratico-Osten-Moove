import { Request, Response } from "express";
import Ferramenta from "../models/ferramenta";


enum FerramentaStatus {
    DISPONIVEL = "Disponível",
    RESERVADO = "Reservado",
    EM_USO = "Em Uso",
}


export const getFerramentas = async (res: Response) => {
    const ferramentas = await Ferramenta.findAll();
    res.json({ ferramentas });
};


export const getFerramenta = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const ferramenta = await Ferramenta.findByPk(id);

        if (ferramenta) {
            res.json(ferramenta);
        } else {
            res.status(404).json({
                msg: `Não há ferramenta cadastrada com o id ${id}`,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Erro ao buscar uma  ferramenta",
        });
    }
};

export const createFerramenta = async (req: Request, res: Response) => {
    try {
        const { nomeFerramenta, descricaoFerramenta, mecânicoId, dataColeta, dataDevolucao } = req.body;

        
        const ferramenta = await Ferramenta.create({
            nomeFerramenta,
            descricaoFerramenta,
            mecânicoId,
            dataColeta,
            dataDevolucao,
            status: FerramentaStatus.DISPONIVEL,
        });

        res.status(201).json(ferramenta);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Erro ao cadastrar uma ferramenta. ",
        });
    }
};

export const putFerramenta = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const ferramenta = await Ferramenta.findByPk(id);
        if (!ferramenta) {
            return res.status(404).json({
                msg: "Não existe uma ferramenta com  id " + id,
            });
        }
        await ferramenta.update(req.body);
        res.json(ferramenta);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error ao atualizar uma ferramenta",
        });
    }
    
    return res.status(500).json({
        msg: "Error inesperado ao atualizar a ferramenta",
    });
};

export const deleteFerramenta = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const ferramenta = await Ferramenta.findOne({
            where: { id },
        });

        if (!ferramenta) {
            return res.status(404).json({
                msg: "Não existe uma ferramenta com id " + id,
            });
        }

        await ferramenta.destroy();

        res.json(ferramenta);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error ao excluir uma ferramenta",
        });
    }

    return res.status(500).json({
        msg: "Error inesperado ao excluir uma ferramenta",
    });
    
};
export const reservarFerramenta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { mecânicoId } = req.body; 

    try {
        const ferramenta = await Ferramenta.findByPk(id);

        if (!ferramenta) {
            return res.status(404).json({
                msg: "Não existe uma ferramenta com o ID " + id,
            });
        }

        if (ferramenta.status !== FerramentaStatus.DISPONIVEL) {
            return res.status(400).json({
                msg: "Esta ferramenta não está disponível para reserva.",
            });
        }

        ferramenta.status = FerramentaStatus.RESERVADO;
        ferramenta.mecânicoId = mecânicoId;
        await ferramenta.save();

        res.json(ferramenta);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Erro ao reservar a ferramenta",
        });
    }
};
