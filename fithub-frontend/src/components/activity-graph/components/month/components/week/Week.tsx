import { Month } from "../../types/Month";
import Day from "./components/day/Day";
import styles from "./Week.module.css";

interface Props {
    week: number[];
    month: Month;
    year: number;
}

const Week: React.FC<Props> = (
    {
        week,
        month,
        year
    }
) => {
    return (
        <div className={styles.week}>
            {week.map((day, index) => {
                return (
                    <Day
                        key={`${day}-${index}`}
                        day={day}
                        month={month}
                        year={year}
                    />
                )
            })}
        </div>
    )
}

export default Week;