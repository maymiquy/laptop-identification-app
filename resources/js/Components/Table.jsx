import React from "react";

const Table = (props) => {
    const { children } = props;

    return (
        <div className="overflow-x-auto overflow-y-auto relative shadow-md rounded-[2px] md:rounded-[4px]">
            <table className="w-full text-gray-500 h-[300px] border-collapse">
                {children}
            </table>
        </div>
    );
};

const Head = (props) => {
    const { columns } = props;

    return (
        <thead className="text-[10px] md:text-sm text-left md:uppercase bg-indigo-500 text-white">
            <tr>
                {columns.map((col, index) => (
                    <th
                        key={index}
                        scope="col"
                        className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300"
                    >
                        {col}
                    </th>
                ))}
                <th
                    scope="col"
                    className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300"
                >
                    Actions
                </th>
            </tr>
        </thead>
    );
};

const Body = (props) => {
    const { columns, data } = props;

    return (
        <tbody className="text-[10px] md:text-xs text-left">
            {data.map((row, index) => (
                <tr
                    key={index}
                    className={`border-b ${
                        index % 2 === 1 ? "bg-gray-50" : ""
                    }`}
                >
                    {columns.map((col, colIndex) => (
                        <td
                            key={colIndex}
                            className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300"
                        >
                            {row[col]}
                        </td>
                    ))}
                    <td className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300">
                        Action Button
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

Table.Root = Table;
Table.Head = Head;
Table.Body = Body;

export default Table;
