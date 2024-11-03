import Month from "../../../../Month";
import styles from "./Day.module.css";

interface Props {
    day: number;
    month: Month;
    year: number;
}

const Day: React.FC<Props> = (
    {
        day
    }
) => {

    const dayStyle = day === 1 ? styles.active : styles.inactive;

    return (
        <div className={`${styles.day} ${dayStyle}`}></div>
    )
}

export default Day;