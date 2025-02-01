export class DateRange {

    private readonly startDate: Date;
    private readonly endDate: Date;

    constructor(
        startDate: Date,
        endDate: Date
    ) {

        this.startDate = startDate;
        this.endDate = endDate;
        this.validateDates(startDate, endDate);
    }

    private validateDates(startDate: Date, endDate: Date): void {

        if (endDate == startDate) {
            throw new Error("A data de início e término não podem ser iguais");
        }

        if (endDate < startDate) {
            throw new Error("A data de término deve ser posterior à data de início");
        }
    }

    getStartDate(): Date {
        return this.startDate;
    }

    getEndDate(): Date {
        return this.endDate;
    }

    getTotalNights(): number {
        const diffTime = this.endDate.getTime() - this.getStartDate().getTime();

        return Math.ceil(diffTime / (1000 * 3600 * 24));
    }

    overlaps(other: DateRange): boolean {
        return this.startDate < other.endDate && other.startDate < this.endDate
    }

    

}
