import { DateRange } from "../value-objects/date_range";
import { Property } from "./property";
import { User } from "./user";

export class Booking {
  private readonly id: string;
  private readonly property: Property;
  private readonly guest: User;
  private readonly dateRange: DateRange;
  private readonly guestCount: number;

  constructor(
    id: string,
    property: Property,
    guest: User,
    dateRange: DateRange,
    guestCount: number,
  ) {
    this.id = id;
    this.property = property;
    this.guest = guest;
    this.dateRange = dateRange;
    this.guestCount = guestCount;
  }

  getId(): string {
    return this.id;
  }

  getProperty(): Property {
    return this.property;
  }

  getUser(): User {
    return this.guest;
  }

  getDateRange(): DateRange {
    return this.dateRange;
  }

  getGuestCount(): number {
    return this.guestCount;
  }
}
