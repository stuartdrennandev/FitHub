import Month from "../../../../Month";

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
    return (
        <div>{day}</div>
    )
}

export default Day;