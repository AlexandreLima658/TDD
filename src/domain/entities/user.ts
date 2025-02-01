export class User {

    private readonly id: string;
    private readonly name: string

    constructor(id: string, name: string){
        this.id = id;
        this.name = name;

        if (!name) {
            throw new Error("O nome é obrigatório");
        }

        if (!id) {
            throw new Error("O ID é obrigatório");
        }
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

}