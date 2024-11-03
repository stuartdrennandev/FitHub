import Month from "./components/month/Month";
import { months } from "./components/month/types/Month";
import styles from "./ActivityGraph.module.css"

interface Props {
    year: number;
}

const ActivityGraph: React.FC<Props> = (
    {
        year
    }
) => {
    return (
        <div className={styles.graphContainer}>
            <div className={styles.monthsContainer}>
                {months.map(month => (
                    <Month month={month} year={year} />
                ))}
            </div>

        </div>
    )
}

export default ActivityGraph;