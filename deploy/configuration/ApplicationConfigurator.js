"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PlayerController_1 = __importDefault(require("../controllers/PlayerController"));
const dotenv_1 = __importDefault(require("dotenv"));
const application = (0, express_1.default)();
class Configurator {
    configured() {
        if (dotenv_1.default)
            dotenv_1.default.config();
        application.use(express_1.default.json());
        application.use("/players", (0, PlayerController_1.default)());
        return application;
    }
}
exports.default = new Configurator().configured;
