import { months } from "../../types/Month";
import { monthToString } from "./MonthToString";

describe("given the months as numbers", () => {
    const monthsAsNumbers = months;

    it("should return the months as strings", () => {
        const result: string[] = monthsAsNumbers.map((month) => monthToString(month));

        expect(result).toEqual([
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
        ])
    })
});