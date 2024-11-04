import Month from "../../../../Month";
import { monthToString } from "../../../../utils/month-to-string/MonthToString";
import styles from "./Day.module.css";
import { Tooltip } from "antd";

interface Props {
    day: number;
    month: Month;
    year: number;
}

const Day: React.FC<Props> = (
    {
        day,
        month
    }
) => {
    const dayStyle = day === 1 ? styles.active : styles.inactive;

    const dayActivityText = day === 1 ? `1 workouts on ${monthToString(month)} ${day}` : `No workouts on ${monthToString(month)} ${day}`;

    return (
        <Tooltip title={dayActivityText}>
            <div className={`${styles.day} ${dayStyle}`}></div>
        </Tooltip>
    )
}

export default Day;