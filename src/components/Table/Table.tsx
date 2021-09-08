import React, { FC } from "react";
import { IData } from "../../interfaces/IData";
import { useTable, Column } from "react-table";

export interface ITable {
    columns: Column<IData>[];
    data: IData[];
}

const Table: FC<ITable> = ({ columns, data }) => {
    const defaultColumn = React.useMemo(
        () => ({
            minWidth: 150,
            width: 150,
            maxWidth: 150,
        }),
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable<IData>({
            columns,
            data,
            defaultColumn,
        });

    return (
        <div className="mt-5 lg:mx-28 mx-9 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table
                            {...getTableProps()}
                            className="min-w-full divide-y divide-gray-200"
                        >
                            <thead>
                                {headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <th {...column.getHeaderProps()}>
                                                {column.render("Header")}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody
                                {...getTableBodyProps()}
                                className="bg-white divide-y divide-gray-200"
                            >
                                {rows.map((row, i) => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map((cell) => {
                                                return (
                                                    <td
                                                        {...cell.getCellProps()}
                                                        className="border-2 px-6 py-4 whitespace-nowrap text-center"
                                                    >
                                                        {cell.render("Cell")}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
