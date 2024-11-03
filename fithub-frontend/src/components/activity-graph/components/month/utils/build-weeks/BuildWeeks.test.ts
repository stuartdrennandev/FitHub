import { buildWeeks } from "./BuildWeeks";

describe("when building the weeks in a month", () => {
    describe("given the month is January", () => {
        const result = buildWeeks(1, 2024);

        it("should return the correct array", () => {
            expect(result).toEqual([
                [1, 2, 3, 4, 5, 6, 7],
                [8, 9, 10, 11, 12, 13, 14],
                [15, 16, 17, 18, 19, 20, 21],
                [22, 23, 24, 25, 26, 27, 28],
                [29, 30, 31]
            ]);
        });
    });

    describe("given the month is September", () => {
        const result = buildWeeks(9, 2024);

        it("should return the correct array", () => {
            expect(result).toEqual([
                [1, 2, 3, 4, 5, 6, 7],
                [8, 9, 10, 11, 12, 13, 14],
                [15, 16, 17, 18, 19, 20, 21],
                [22, 23, 24, 25, 26, 27, 28],
                [29, 30]
            ]);
        });
    });

    describe("given the month is February", () => {
        describe("and it's a leap year", () => {
            const result = buildWeeks(2, 2024);

            it("should return the correct array", () => {
                expect(result).toEqual([
                    [1, 2, 3, 4, 5, 6, 7],
                    [8, 9, 10, 11, 12, 13, 14],
                    [15, 16, 17, 18, 19, 20, 21],
                    [22, 23, 24, 25, 26, 27, 28],
                    [29]
                ]);
            });
        });

        describe("and it's not a leap year", () => {
            const result = buildWeeks(2, 2023);

            it("should return the correct array", () => {
                expect(result).toEqual([
                    [1, 2, 3, 4, 5, 6, 7],
                    [8, 9, 10, 11, 12, 13, 14],
                    [15, 16, 17, 18, 19, 20, 21],
                    [22, 23, 24, 25, 26, 27, 28]
                ]);
            });
        });
    });
});