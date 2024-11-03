import { Month } from "../../../types/Month";

export function getDaysInMonth(month: Month, year: number): number {
    // 0 as the day gets the last day of the previous month. Months are 0 indexed.
    return new Date(year, month, 0).getDate();
}