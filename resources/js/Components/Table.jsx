import React from "react";

const Table = (props) => {
    const { children } = props;

    return (
        <div className="overflow-x-scroll relative shadow-md rounded-[4px] md:rounded-lg">
            <table className="w-full text-xs md:text-sm text-left text-gray-500 table-fixed md:table-auto">
                {children}
            </table>
        </div>
    );
};

const Head = (props) => {
    const { columns } = props;

    return (
        <thead className="text-[8px] md:text-xs text-left text-gray-700 md:uppercase bg-gray-200 overflow-x-scroll">
            <tr>
                {columns.map((col, index) => (
                    <th
                        key={index}
                        scope="col"
                        className="py-1 px-3 md:py-3 md:px-6"
                    >
                        {col}
                    </th>
                ))}
                <th scope="col" className="py-1 px-3 md:py-3 md:px-6">
                    Actions
                </th>
            </tr>
        </thead>
    );
};

const Body = (props) => {
    const { columns, data } = props;

    return (
        <tbody className="text-[8px] md:text-xs text-left overflow-x-scroll">
            {data.map((row, index) => (
                <tr key={index} className="border-b">
                    {columns.map((col, colIndex) => (
                        <td
                            key={colIndex}
                            className="py-2 px-3 md:py-4 md:px-6 text-[8px] md:text-sm"
                        >
                            {row[col]}
                        </td>
                    ))}
                    <td className="py-2 px-3 md:py-4 md:px-6 text-[8px] md:text-sm">
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
