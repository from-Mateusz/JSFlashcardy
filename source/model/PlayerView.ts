export class PlayerView {

    constructor(private name: string, private email: string, private password: string, private id?: number) {}

    private setId(id: number) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    changeEmail(email: string) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    changePassword(password: string) {
        this.password = password;
    }

    getPassword() {
        return this.password;
    }
}