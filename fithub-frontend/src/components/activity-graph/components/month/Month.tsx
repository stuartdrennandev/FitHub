import type { Month } from "./types/Month";
import styles from "./Month.module.css";

interface Props {
    month: Month;
    year: number;
}

const getDaysInMonth = () => {

}

const Month: React.FC<Props> = (
    {
        month
    }
) => {
    return (
        <div>
            <div className={styles.month}>{month}</div>
            <div></div>
        </div>
    );
}

export default Month;