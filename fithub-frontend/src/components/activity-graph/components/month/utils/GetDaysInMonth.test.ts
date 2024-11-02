import { getDaysInMonth } from "./GetDaysInMonth"

describe("when calculating the number of days in a month", () => {
    describe("given the month is January", () => {
        const result = getDaysInMonth(1, 2024);

        it("should return 31", () => {
            expect(result).toBe(31);
        });
    });

    describe("given the month is September", () => {
        const result = getDaysInMonth(9, 2024);

        it("should return 30", () => {
            expect(result).toBe(30);
        });
    });

    describe("given the month is February", () => {
        describe("and it's a leap year", () => {
            const result = getDaysInMonth(2, 2024);

            it("should return 29", () => {
                expect(result).toBe(29);
            });
        });

        describe("and it's not a leap year", () => {
            const result = getDaysInMonth(2, 2023);

            it("should return 28", () => {
                expect(result).toBe(28);
            });
        });
    });
});