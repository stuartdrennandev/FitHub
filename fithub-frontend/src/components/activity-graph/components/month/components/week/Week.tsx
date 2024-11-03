import { Month } from "../../types/Month";
import Day from "./components/day/Day";

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
        <div>
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