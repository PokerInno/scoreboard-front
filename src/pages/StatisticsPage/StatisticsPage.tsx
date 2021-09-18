import { useEffect, useState } from "react";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import Chart from "../../components/Chart";

export interface IStatisticsPage {}

interface IPerson {
    Start: string;
    Person: string;
    Total: string;
    Bonus: string;
}

const StatisticsPage: FC<IStatisticsPage> = () => {
    const prepareData = (data: { person: IPerson }) => {
        const prepStats: {}[] = [
            { name: "Start", score: parseFloat(data.person.Start) },
        ];
        let score =
            parseFloat(data.person.Start) + parseFloat(data.person.Bonus);

        const { Start, Total, Person, Bonus, ...stats } = data.person;
        Object.keys(stats).map((key) => {
            if ((stats as any)[key] !== "-")
                score = score + parseFloat((stats as any)[key]);
            prepStats.push({ name: key, score: score });
            return { name: key, score: score };
        });

        setData(prepStats);
    };

    const [data, setData] = useState([{}]);
    const location = useLocation();

    useEffect(() => {
        prepareData(location.state as { person: IPerson });
    }, [location.state]);

    return (
        <div className="flex flex-col items-center">
            <Chart
                width="100%"
                height={850}
                data={data}
                dataKey="score"
                margin={{ top: 30, right: 30, bottom: 5, left: 0 }}
            />
            <p className="text-2xl">
                {(location.state as { person: IPerson }).person.Person}
            </p>
        </div>
    );
};

export default StatisticsPage;
