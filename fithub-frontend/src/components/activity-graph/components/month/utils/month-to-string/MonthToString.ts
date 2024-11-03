import { Month } from "../../types/Month";

export function monthToString(month: Month): string {
    const monthsOfTheYear = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return monthsOfTheYear[month - 1];
}