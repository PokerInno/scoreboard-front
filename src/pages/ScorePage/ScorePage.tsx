import React from "react";
import { FC } from "react";
import Table from "../../components/Table";
import { Column } from "react-table";
import { IData } from "../../interfaces/IData";

export interface IScorePage {}

const getData = () => [
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
    {
        place: 1,
        name: "Daniil Gubaidullin",
        score: 24,
    },
];

const ScorePage: FC<IScorePage> = () => {
    const columns: Column<IData>[] = React.useMemo(
        () => [
            {
                Header: "Place",
                accessor: "place",
            },
            {
                Header: "Name",
                accessor: "name",
            },
            {
                Header: "Score",
                accessor: "score",
            },
        ],
        []
    );

    const data = React.useMemo(() => getData(), []);

    return (
        <div className="justify-center">
            <Table columns={columns} data={data} />
        </div>
    );
};

export default ScorePage;
