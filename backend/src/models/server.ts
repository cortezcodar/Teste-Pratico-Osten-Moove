import express, { Application } from "express";
import userRoutes from "../routes/ferramenta";
import cors from "cors";

import db from "../db/connection";

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        ferramentas: "/api/ferramentas",
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "4000";

        //Init methods
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log("Database online");
        } catch (error: any) {
            throw new Error(error);
        }
    }

    middlewares() {
        //Cors
        this.app.use(cors());
        //Body parse
        this.app.use(express.json());
        //Public folder
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.apiPaths.ferramentas, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto" + this.port);
        });
    }
}

export default Server;
