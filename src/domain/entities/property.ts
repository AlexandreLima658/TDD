export class Property {
  constructor(
    private id: string,
    private name: string,
    private description: string,
    private maxGuests: number,
    private basePricePerNight: number,
  ) {
    if (!name) {
      throw new Error("O nome é obrigatório");
    }

    if (maxGuests <= 0) {
      throw new Error("O número máximo de hóspedes deve ser maior que zero");
    }

    this.id = id;
    this.name = name;
    this.description = description;
    this.maxGuests = maxGuests;
    this.basePricePerNight = basePricePerNight;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getMaxGuests(): number {
    return this.maxGuests;
  }

  getBasePricePerNight(): number {
    return this.basePricePerNight;
  }

  validateMaxGuests(guestCount: number): void {
    if (guestCount > this.maxGuests) {
      throw new Error(
        `O número máximo de hóspedes excedido. Máximo permitido: ${this.maxGuests}.`,
      );
    }
  }
}
