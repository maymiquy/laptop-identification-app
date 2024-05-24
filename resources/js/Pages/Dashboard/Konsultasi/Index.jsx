import React from "react";
import DashboardLayout from "../../../Layouts/DashboardLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import Table from "../../../Components/Table";
import Pagination from "../../../Components/Pagination";

const Index = () => {
    const { auth, data_konsultasi, data_kerusakan } = usePage().props;
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(data_konsultasi.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data_konsultasi.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Head title="Konsultasi" />
            <DashboardLayout user={auth.user}>
                <div className="py-4 md:py-6">
                    <div className="max-w-7xl flex-col flex justify-between mx-auto">
                        <div className="bg-white flex flex-col items-center shadow-md rounded-md md:rounded-lg pt-3 pb-6 px-6 md:px-8">
                            <div className="flex flex-col w-full gap-4 py-2 justify-start">
                                <h1 className="text-2xl">Data Konsultasi</h1>
                            </div>
                            <Table.Root>
                                <Table.Head
                                    columns={[
                                        "No",
                                        "Nama",
                                        "Email",
                                        "OS",
                                        "Kerusakan",
                                        "Tanggal",
                                    ]}
                                />
                                <tbody className="text-xs md:text-sm text-center">
                                    {currentItems.map((row, index) => (
                                        <tr
                                            key={index}
                                            className={`border-b ${
                                                index % 2 === 1
                                                    ? "bg-gray-50"
                                                    : ""
                                            }`}
                                        >
                                            <td className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300">
                                                {index + 1}
                                            </td>
                                            <td className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300">
                                                {row.nama_lengkap}
                                            </td>
                                            <td className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300">
                                                {row.email}
                                            </td>
                                            <td className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300">
                                                {row.os}
                                            </td>
                                            <td className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300">
                                                {
                                                    data_kerusakan.find(
                                                        (k) =>
                                                            k.id ===
                                                            row.kerusakan_id
                                                    )?.nama_kerusakan
                                                }
                                            </td>
                                            <td className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300">
                                                {new Intl.DateTimeFormat(
                                                    "id-ID",
                                                    {
                                                        year: "numeric",
                                                        month: "2-digit",
                                                        day: "2-digit",
                                                    }
                                                ).format(
                                                    new Date(row.created_at)
                                                )}
                                            </td>
                                            <td className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300">
                                                <div className="flex justify-center items-center space-x-2">
                                                    <Link
                                                        className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 shadow-md shadow-indigo-300 hover:shadow-indigo-700"
                                                        href={route(
                                                            "konsultasi.result",
                                                            {
                                                                konsultasi: row,
                                                            }
                                                        )}
                                                    >
                                                        <span className="text-[10px]">
                                                            Show
                                                        </span>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table.Root>
                            <div className="flex justify-center mt-4">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
};

export default Index;
