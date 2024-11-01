import Month from "./components/month/Month";
import { months } from "./components/month/types/Month";
import styles from "./ActivityGraph.module.css"

const ActivityGraph: React.FC = () => {
    return (
        <div className={styles.monthsContainer}>
            {months.map(month => (
                <Month month={month} />
            ))}
        </div>
    )
}

export default ActivityGraph;