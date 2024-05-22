import React from "react";

const Table = (props) => {
    const { children, className } = props;
    return (
        <div
            className={`overflow-x-scroll relative max-w-[21rem] ${className} sm:max-w-full md:max-w-full md:w-full shadow-md rounded-[4px] md:rounded-lg`}
        >
            <table className="text-gray-500 w-full text-center border-collapse">
                {children}
            </table>
        </div>
    );
};

const Head = (props) => {
    const { columns } = props;
    return (
        <thead className="text-xs md:text-sm text-center md:uppercase bg-indigo-500 text-white">
            <tr>
                {columns.map((col, index) => (
                    <th
                        key={index}
                        scope="col"
                        className="py-1 px-2 md:py-2 md:px-4 text-wrap max-w-max border border-gray-300"
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

Table.Root = Table;
Table.Head = Head;

export default Table;
