import { Sequelize } from "sequelize";

const db = new Sequelize("test", "ferramentas", "osten", {
    host: "localhost",
    dialect: "mysql",
    define: {

        timestamps:true
    },
});

export default db;
