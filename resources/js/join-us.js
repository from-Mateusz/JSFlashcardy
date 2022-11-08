import axios from "axios";

class JoinUsManager {
    constructor() {

        const setup = () => {
            const joinUsForm = document.getElementById("join-us-form");
            if(!joinUsForm) throw new Error("Join us form [id: join-us-form] is not available!");
            joinUsForm.dataset.isReady = true;
            joinUsForm.addEventListener("submit", (ev) => {
                ev.preventDefault();
                this._join();
            });
        }

        setup();
    }

    async _join() {
        if(!this._isJoinUsFormReady()) throw new Error("Can't join due to unready join us form");
        const joinUsForm = this._getJoinUsForm();
        const requiredData = ["player_name", "player_email", "player_password"]
        const joinUsFormData = Array.from(joinUsForm.elements)
                                .filter(element => requiredData.includes(element.name) );
        if(joinUsFormData.length !== requiredData.length) return;

        const playerData = {};
        
        joinUsFormData.forEach(data => playerData[data.name] = {
            property: data.name,
            value: data.value
        });

        console.log("Player data payload: ", playerData);

        const joinUsResponse = await axios.post("http://localhost:8080/api/public/players/join", 
                                            playerData                                    
                                            ).then(response => response.data);

        console.log("Join us response: ", joinUsResponse);
    }

    _isJoinUsFormReady() {
        const joinUsForm = this._getJoinUsForm();
        if(!joinUsForm || !(joinUsForm instanceof HTMLFormElement) || !joinUsForm.dataset.isReady) return false;
        return joinUsForm.dataset.isReady;
    }

    _getJoinUsForm() {
        return document.getElementById("join-us-form");
    }
}

export default JoinUsManager;