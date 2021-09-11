import React, { useState } from "react";
import { FC } from "react";
import Table from "../../components/Table";
import { Column } from "react-table";
import useGoogleSheets from "use-google-sheets";
import { useEffect } from "react";

export interface IScorePage {}

const ScorePage: FC<IScorePage> = () => {
    const { data, loading } = useGoogleSheets({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY || "",
        sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID || "",
    });

    const [d, setD] = useState<{}[]>([]);

    useEffect(() => {
        if (!loading) setD(data[0].data);
    }, [loading, data]);

    const columns: Column<{}>[] = React.useMemo(
        () => [
            {
                Header: "Person",
                accessor: "Person",
            },
            {
                Header: "Total",
                accessor: (d) => {
                    return Number((d as any)["Total"]);
                },
                sortType: "basic",
                defaultCanSort: true,
                sortDescFirst: true,
            },
        ],
        []
    );

    return (
        <div className="justify-center">
            <Table columns={columns} data={d} />
        </div>
    );
};

export default ScorePage;
