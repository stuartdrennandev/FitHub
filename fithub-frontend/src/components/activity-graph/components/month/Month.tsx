import type { Month } from "./types/Month";

interface Props {
    month: Month;
}

const Month: React.FC<Props> = (
    {
        month
    }
) => {
    return (
        <div>
            <div>{month}</div>
        </div>
    );
}

export default Month;