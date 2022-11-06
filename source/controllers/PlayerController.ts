import * as express from "express";
import playerApi from "../api/PlayerApi";
import { PlayerModel } from "../model/PlayerModel";
import PlayerApi from "../api/PlayerApi";
import LocaleResolver from "../utils/LocaleResolver";

class PlayerController {
    
    private readonly router = express.Router();

    constructor(private api: any = PlayerApi()) {
        this.setup();
    }

    private setup() {
        this.router.post("/:lang/players/join", (req, res, next) => {
            const { lang } = req.params;
            const player: PlayerModel = req.body();
            const apiCallout = this.api.join(player, LocaleResolver.resolve(lang));
        });
    }

    getRouter() {
        return this.router;
    }
}

const getInstance = () => { 
    const controller = new PlayerController();
    return controller.getRouter;
}

export default getInstance();


