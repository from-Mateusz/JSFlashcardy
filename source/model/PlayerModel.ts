import { ModelProperty } from "./ModelProperty";

export { ModelProperty } from "./ModelProperty";

export class PlayerModel {
    constructor(private name: ModelProperty, private email: ModelProperty, private password: ModelProperty) {}

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }
}