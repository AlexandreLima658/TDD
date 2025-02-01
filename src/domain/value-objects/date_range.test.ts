import {DateRange} from "./date_range";

describe('DataRange Value Object', () => {

    it("deve criar uma instância de DataRange com data de início e data de término e verificar o retorno dessas datas", () => {

        const startDate = new Date("2024-12-20");
        const endDate = new Date("2024-12-25")

        const dateRange = new DateRange(startDate, endDate);

        expect(dateRange.getStartDate()).toEqual(startDate);
        expect(dateRange.getEndDate()).toEqual(endDate);

    });

    it("deve lançar um erro se a data de término for antes da data de inicio", () => {
        expect(() => {
            new DateRange(new Date('2024-12-25'), new Date('2024-12-20'))
        }).toThrow("A data de término deve ser posterior à data de início")
    });

    it("deve calcular o total de noites corretamente", () => {

        const startDate = new Date("2024-12-20");
        const endDate = new Date("2024-12-25")

        const dateRange = new DateRange(startDate, endDate);
        const totalNights = dateRange.getTotalNights();

        expect(totalNights).toBe(5);
    });

    it("deve verificar se dois intervalos de datas se sobrepõem", () => {

        const dataRange1 = new DateRange(
            new Date('2024-12-20'),
            new Date('2024-12-25')
        )

        const dateRange2 = new DateRange(
            new Date('2024-12-22'),
            new Date('2024-12-27')
        )

        const overlaps = dataRange1.overlaps(dateRange2);
        expect(overlaps).toBe(true);
        
    });

    it("deve laçar erro se a data de inicio e término forem iguais",() =>{
        const date = new Date("2024-12-20");
        
        expect(() => {
            new DateRange(date,date);
        }).toThrow("A data de início e término não podem ser iguais");

    });
});
