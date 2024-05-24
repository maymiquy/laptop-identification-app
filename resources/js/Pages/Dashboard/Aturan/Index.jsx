import React from "react";
import DashboardLayout from "../../../Layouts/DashboardLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import Table from "../../../Components/Table";
import Pagination from "../../../Components/Pagination";
import PrimaryButton from "../../../Components/PrimaryButton";
import DangerButton from "../../../Components/DangerButton";
import ModalMessage from "../../../Components/ModalMessage";
import Modal from "../../../Components/Modal";
import SecondaryButton from "../../../Components/SecondaryButton";

const Index = () => {
    const { auth, aturan: dataAturan, gejala, flash } = usePage().props;
    const [currentPage, setCurrentPage] = React.useState(1);
    const [aturan, setAturan] = React.useState(dataAturan);
    const [showDeleteModal, setShowDeleteModal] = React.useState(false);
    const [showMessageModal, setShowMessageModal] = React.useState(false);
    const [deleteAturan, setDeleteAturan] = React.useState(null);

    const itemsPerPage = 10;

    const totalPages = Math.ceil(aturan.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = aturan.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleDeleteModal = (aturan) => {
        setDeleteAturan(aturan);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        router.delete(
            route("dashboard.aturan.destroy", {
                aturan: deleteAturan.kode_aturan,
            }),
            {
                preserveScroll: true,
                onSuccess: () => {
                    setAturan(
                        aturan.filter(
                            (a) => a.kode_aturan !== deleteAturan.kode_aturan
                        )
                    );
                    setShowDeleteModal(false);
                    setShowMessageModal(true);
                },
                onError: (error) => {
                    console.error(error);
                    setShowDeleteModal(false);
                },
            }
        );
    };

    React.useEffect(() => {
        if (flash.success) {
            setShowMessageModal(true);
        } else {
            setShowMessageModal(false);
        }
    }, [flash.success]);

    return (
        <>
            <Head title="Aturan" />
            <DashboardLayout user={auth.user}>
                <div className="py-4 md:py-6">
                    <div className="max-w-7xl flex-col flex justify-between mx-auto">
                        <div className="bg-white flex flex-col items-center shadow-md rounded-md md:rounded-lg pt-3 pb-6 px-6 md:px-8">
                            <div className="flex flex-col w-full gap-4 py-2 justify-start">
                                <h1 className="text-2xl">Data Aturan</h1>
                                <Link href="/dashboard/aturan/create">
                                    <PrimaryButton className="text-xs justify-center w-1/6">
                                        Tambah
                                    </PrimaryButton>
                                </Link>
                            </div>
                            <Table.Root>
                                <Table.Head
                                    columns={[
                                        "No",
                                        "Kode Aturan",
                                        "Gejala",
                                        "Gejala Sebelumnya",
                                        "Ya",
                                        "Tidak",
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
                                                {row.id}
                                            </td>
                                            <td className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300">
                                                {row.kode_aturan}
                                            </td>
                                            <td className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300">
                                                {
                                                    gejala.find(
                                                        (g) =>
                                                            g.id ===
                                                            row.gejala_id
                                                    )?.kode_gejala
                                                }
                                                {" - "}
                                                {
                                                    gejala.find(
                                                        (g) =>
                                                            g.id ===
                                                            row.gejala_id
                                                    )?.nama_gejala
                                                }
                                            </td>
                                            <td className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300">
                                                {row.gejala_sebelum}
                                            </td>
                                            <td className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300">
                                                {row.next_true}
                                            </td>
                                            <td className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300">
                                                {row.next_false}
                                            </td>
                                            <td className="py-1 px-2 md:py-2 md:px-4 text-wrap border border-gray-300">
                                                <div className="flex items-center space-x-2">
                                                    <Link
                                                        className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 shadow-md shadow-indigo-300 hover:shadow-indigo-700"
                                                        href={route(
                                                            "dashboard.aturan.edit",
                                                            {
                                                                aturan: row.kode_aturan,
                                                            }
                                                        )}
                                                    >
                                                        <span className="text-[10px]">
                                                            Edit
                                                        </span>
                                                    </Link>
                                                    <DangerButton
                                                        onClick={() =>
                                                            handleDeleteModal(
                                                                row
                                                            )
                                                        }
                                                    >
                                                        <span className="text-[10px]">
                                                            Delete
                                                        </span>
                                                    </DangerButton>
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
            <ModalMessage
                message={flash.success}
                type="success"
                show={showMessageModal}
                onClose={() => setShowMessageModal(false)}
            />
            <Modal
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
            >
                <form onSubmit={confirmDelete}>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                                <h3
                                    className="text-lg font-medium leading-6 text-gray-900"
                                    id="modal-title"
                                >
                                    Hapus Data
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Apakah Anda yakin ingin menghapus data
                                        aturan {deleteAturan?.kode_aturan}?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-row-reverse justify-start gap-2">
                        <DangerButton type="submit">Hapus</DangerButton>
                        <SecondaryButton
                            type="button"
                            className="justify-center"
                            onClick={() => setShowDeleteModal(false)}
                        >
                            Batal
                        </SecondaryButton>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default Index;
