"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class PlayerApiImpl {
    async join(player) {
        const preparePlayer = {};
        return axios_1.default.post("/api/public/player/join", player)
            .then(response => response.data)
            .catch(err => {
            return { error: "Fatal internal error: ", explanation: err };
        });
    }
}
const getInstance = () => new PlayerApiImpl();
exports.default = getInstance;
