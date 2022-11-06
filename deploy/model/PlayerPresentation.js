"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    name;
    email;
    password;
    id;
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static createWithId(id, name, email, password) {
        const player = Player.createWithoutId(name, email, password);
        player.setId(id);
        return player;
    }
    static createWithoutId(name, email, password) {
        return new Player(name, email, password);
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
exports.Player = Player;
