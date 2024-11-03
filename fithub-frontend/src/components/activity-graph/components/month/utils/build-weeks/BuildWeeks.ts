import { Month } from "../../types/Month";
import { getDaysInMonth } from "./utils/GetDaysInMonth";

export function buildWeeks(month: Month, year: number): number[][] {
    const daysInMonth = getDaysInMonth(month, year);

    let weeks = [];

    for (let firstDayInWeek = 1; firstDayInWeek <= daysInMonth; firstDayInWeek += 7) {
        const remainingDaysInMonth = daysInMonth - firstDayInWeek + 1;
        const daysInThisWeek = Math.min(7, remainingDaysInMonth);

        const week = Array.from(
            { length: daysInThisWeek },
            (_, index) => firstDayInWeek + index
        );

        weeks.push(week);
    }

    return weeks;
}