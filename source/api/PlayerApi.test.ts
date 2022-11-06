import { describe, test, expect } from "@jest/globals";
import { PlayerModel } from "../model/PlayerModel";
import PlayerApi from "./PlayerApi";
import dotenv from "dotenv";
import LocaleResolver from "../utils/LocaleResolver";

dotenv.config();

const api = PlayerApi();

describe("Player API", () => {    
    test("player with invalid data should not join application", async () => {
        const response = await api.join(new PlayerModel(
            { property: "name", value: "MalevolentOne" },
            { property: "email", value: "notmyemail@email" },
            { property: "password", value: "silly_password" }
        ), LocaleResolver.resolve("pl"));

        console.log("Response: ", response);

        const errors = response["errors"];

        expect(response.errors).not.toHaveLength(0);
    });
});