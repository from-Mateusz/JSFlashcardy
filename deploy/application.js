"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationConfigurator_1 = __importDefault(require("./configuration/ApplicationConfigurator"));
const application = (0, ApplicationConfigurator_1.default)();
application.listen(process.env.SERVER_PORT, () => { console.log("Welcome to Flashcard middleware app"); });
