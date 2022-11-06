import { PlayerModel } from "../model/PlayerModel";
import axios from "axios";

interface PlayerApi {
    join(player: PlayerModel, locale: any): Promise<any>; 
}

class PlayerApiImpl implements PlayerApi {
    async join(player: PlayerModel, locale: any) {
           return axios.post(
                    `${process.env.BACKDOOR_API_SERVER_URL}/api/public/player/join`,
                    player,
                    {
                        headers: {
                            "X-app-language": locale.arr.join(",")
                        }
                    }
                )
                .then(response => response.data)
                .catch(err => {
                    return { error: "Fatal internal error: ", explanation: err}
                });
    }
}

const getInstance = (): PlayerApi => new PlayerApiImpl();

export default getInstance;