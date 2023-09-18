"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("test", "ferramentas", "osten", {
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: true
    },
});
exports.default = db;
