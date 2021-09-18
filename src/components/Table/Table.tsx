import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useTable, Column, useSortBy, usePagination } from "react-table";
import getRoute from "../../functions/getRoute";
import Icon from "../Icon/Icon";
export interface ITable {
    columns: Column<{}>[];
    data: {}[];
}

const Table: FC<ITable> = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,

        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable<{}>(
        {
            columns,
            data,
            initialState: {
                pageIndex: 0,
                pageSize: 15,
                sortBy: [{ id: "Total", desc: true }],
            },
        },
        useSortBy,
        usePagination
    );

    return (
        <div className="mt-5 lg:mx-28 mx-6 flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                                            <th
                                                {...column.getHeaderProps(
                                                    column.getSortByToggleProps()
                                                )}
                                            >
                                                {column.render("Header")}
                                                {/* Add a sort direction indicator */}
                                                <span>
                                                    {column.isSorted
                                                        ? column.isSortedDesc
                                                            ? " 🔽"
                                                            : " 🔼"
                                                        : ""}
                                                </span>
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody
                                {...getTableBodyProps()}
                                className="bg-white divide-y divide-gray-200"
                            >
                                {page.map((row, i) => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map((cell) => {
                                                return (
                                                    <td
                                                        {...cell.getCellProps()}
                                                        className="border-2 lg:px-6 px-2 lg:py-4 py-1 whitespace-nowrap text-center"
                                                    >
                                                        <NavLink
                                                            to={{
                                                                pathname:
                                                                    getRoute(
                                                                        "navbar.statistics"
                                                                    ),
                                                                state: {
                                                                    person: cell
                                                                        .row
                                                                        .original,
                                                                },
                                                            }}
                                                        >
                                                            {cell.render(
                                                                "Cell"
                                                            )}
                                                        </NavLink>
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
            <div className="pagination flex justify-between mt-3 mb-3">
                <div className="flex flex-row space-x-5 items-center">
                    <span className="text-sm text-gray-700">
                        Page{" "}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>
                    </span>
                    <select
                        className="shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 "
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                    >
                        {[10, 15, 20, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex space-x-1">
                    <button
                        className="rounded-l-md relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-200"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                    >
                        <Icon name="doubleLeft" width="16px" />
                    </button>
                    <button
                        className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-200"
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        <Icon name="left" width="16px" />
                    </button>
                    <button
                        className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-200"
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                    >
                        <Icon name="right" width="16px" />
                    </button>
                    <button
                        className="rounded-r-md relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-200"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    >
                        <Icon name="doubleRight" width="16px" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;
