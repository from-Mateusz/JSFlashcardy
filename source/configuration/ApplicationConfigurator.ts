import express from "express";
import PlayerController from "../controllers/PlayerController";
import dotenv from "dotenv";

const application = express();

class Configurator {
    configured() {
        if(dotenv) dotenv.config();
        application.use(express.json());
        application.use("/players", PlayerController());
        return application;
    }
}

export default new Configurator().configured;