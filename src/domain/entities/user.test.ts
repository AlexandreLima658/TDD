import {User} from "./user";

describe("User",() => {
    
    it("deve criar um usuário com ID e Nome", () => {
        const user = new User("1", "John Doe");
        
        expect(user.getId()).toBe("1");
        expect(user.getName()).toBe("John Doe");
    })

    it("deve lançar um erro se o Nome for vazio", () => {
        
        expect(() => {
            new User("1", "");
        }).toThrow("O nome é obrigatório");
    })

    it("deve lançar erro se o ID for vazio", () => {
        expect(() => {
            new User("", "John Doe");
        }).toThrow("O ID é obrigatório");
    });
})