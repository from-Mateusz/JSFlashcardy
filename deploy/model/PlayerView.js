"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerView = void 0;
class PlayerView {
    name;
    email;
    password;
    id;
    constructor(name, email, password, id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    changeEmail(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    changePassword(password) {
        this.password = password;
    }
    getPassword() {
        return this.password;
    }
}
exports.PlayerView = PlayerView;
