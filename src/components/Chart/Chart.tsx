import { FC } from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export interface IChart {
    width: string;
    height: number;
    data: {}[];
    dataKey: string;
    margin: { top: number; right: number; bottom: number; left: number };
}

const Chart: FC<IChart> = ({ width, height, data, dataKey, margin }) => {
    return (
        <ResponsiveContainer width={width} height={height}>
            <LineChart data={data} margin={margin}>
                <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Chart;
