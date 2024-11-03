import type { Month } from "./types/Month";
import styles from "./Month.module.css";
import { useMemo } from "react";
import { buildWeeks } from "./utils/build-weeks/BuildWeeks";
import Week from "./components/week/Week";
import { monthToString } from "./utils/month-to-string/MonthToString";

interface Props {
    month: Month;
    year: number;
}

const Month: React.FC<Props> = (
    {
        month,
        year
    }
) => {
    const weeks = useMemo(() => {
        return buildWeeks(month, year);
    }, [month, year]);

    const monthAsString = useMemo(() => {
        return monthToString(month);
    }, [month])

    return (
        <div className={styles.monthContainer}>
            <div className={styles.month}>{monthAsString}</div>
            <div className={styles.weeksContainer}>
                {weeks.map((week, index) => {
                    return (
                        <Week
                            key={`${week}-${index}`}
                            week={week}
                            month={month}
                            year={year}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Month;