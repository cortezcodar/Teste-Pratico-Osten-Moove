import { DataTypes, Model } from "sequelize";
import db from "../db/connection";


enum FerramentaStatus {
    DISPONIVEL = "Disponível",
    RESERVADO = "Reservado",
    EM_USO = "Em Uso",
}

class Ferramenta extends Model {
    public id!: number;
    public nomeFerramenta!: string;
    public descricaoFerramenta!: string;
    public status!: FerramentaStatus;
    public mecânicoId!: number | null; 
    public dataColeta!: Date;
    public devolucaoColeta!: Date;
}

Ferramenta.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nomeFerramenta: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricaoFerramenta: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mecânicoId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        dataColeta: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        devolucaoColeta: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        status: {
            type: DataTypes.ENUM(FerramentaStatus.DISPONIVEL, FerramentaStatus.RESERVADO, FerramentaStatus.EM_USO),
            allowNull: false,
            defaultValue: FerramentaStatus.DISPONIVEL,
        },
    },
    
    {
        sequelize: db,
        modelName: "Ferramenta",
    }
);

export default Ferramenta;
