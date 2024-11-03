import type { Month } from "./types/Month";
import styles from "./Month.module.css";
import { useCallback, useMemo } from "react";
import { getDaysInMonth } from "./utils/build-weeks/utils/GetDaysInMonth";

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
    return (
        <div>
            <div className={styles.month}>{month}</div>
            <div className={styles.daysContainer}>

            </div>
        </div>
    );
}

export default Month;