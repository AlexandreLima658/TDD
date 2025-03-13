import { DateRange } from "../value-objects/date_range";
import { Property } from "./property";
import { User } from "./user";
import { Booking } from "./booking";

describe("Booking entity", () => {
  it("Deve criar uma instancia de Booking com todos os atributos", () => {
    const property = new Property("1", "casa", "nova casa", 4, 100);
    const user = new User("1", "Fulano");
    const dateRange = new DateRange(new Date("24-12-20"), new Date("24-12-25"));

    const booking = new Booking("1", property, user, dateRange, 2);

    expect(booking.getId()).toBe("1");
    expect(booking.getProperty()).toBe(property);
    expect(booking.getUser()).toBe(user);
    expect(booking.getDateRange()).toBe(dateRange);
    expect(booking.getGuestCount()).toBe(2);
  });

  it("deve lançar erro se o número de hóspedes for menor que zero", () => {
    const property = new Property("1", "casa", "casa de campo", 5, 150);
    const user = new User("1", "Ana");
    const dateRange = new DateRange(
      new Date("2024-12-10"),
      new Date("2024-12-15"),
    );

    expect(() => {
      new Booking("1", property, user, dateRange, 0);
    }).toThrow("O número de hóspedes deve ser maior que zero");
  });

  it("deve lançar erro ao tentar reservar com número de hóspedes acima do máximo permitido", () => {
    const property = new Property("1", "casa", "casa de campo", 4, 150);
    const user = new User("1", "Ana");
    const dateRange = new DateRange(
      new Date("2024-12-10"),
      new Date("2024-12-15"),
    );

    expect(() => {
      new Booking("1", property, user, dateRange, 5);
    }).toThrow("O número máximo de hóspedes excedido. Máximo permitido: 4.");
  });
});
