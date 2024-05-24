import { Head, Link, usePage } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
const Hasil = () => {
    const { konsultasi, gejala, kerusakan, solusi, auth } = usePage().props;

    return (
        <>
            <Head title="Hasil Diagnosa" />

            <MainLayout session={auth.user}>
                <div className="flex flex-col space-y-4 px-4 pb-4 pt-4">
                    <div className="text-center mb-4">
                        <h2 className="mb-1 text-2xl font-bold">
                            Hasil Diagnosa
                        </h2>
                        <p className="italic">
                            Hasil diagnosa kerusakan komputer dengan metode
                            forward chaining
                        </p>
                    </div>
                    <div className="border-b boreder-px border-zinc-200" />
                    <div className="space-y-4">
                        <div>
                            <div className="space-y-2">
                                <div className="flex flex-row gap-4">
                                    <div className="w-1/2">
                                        <InputLabel
                                            htmlFor="nama_lengkap"
                                            value="Nama Lengkap:"
                                        />
                                        <TextInput
                                            readOnly
                                            disabled
                                            id="nama_lengkap"
                                            className="bg-zinc-100 w-full rounded-md py-2 px-4"
                                            value={konsultasi.nama_lengkap}
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <InputLabel
                                            htmlFor="email"
                                            value="Email:"
                                        />
                                        <TextInput
                                            readOnly
                                            disabled
                                            id="email"
                                            className="bg-zinc-100 w-full rounded-md py-2 px-4"
                                            value={konsultasi.email}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="os"
                                        value="Sistem Operasi:"
                                    />
                                    <TextInput
                                        readOnly
                                        disabled
                                        id="os"
                                        className="bg-zinc-100 w-full rounded-md py-2 px-4"
                                        value={konsultasi.os}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <InputLabel
                                htmlFor={gejala}
                                value="Gejala yang terdeteksi :"
                            />
                            <textarea
                                id={gejala}
                                className="bg-zinc-100 rounded-md w-full h-28 border-gray-200 text-gray-700 p-4 resize-none"
                                value={gejala}
                                disabled
                            ></textarea>
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="kerusakan"
                                value="Kerusakan yang terdeteksi :"
                            />
                            <TextInput
                                readOnly
                                disabled
                                id="kerusakan"
                                className="bg-zinc-100 w-full rounded-md py-2 px-4"
                                value={kerusakan}
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor={solusi} value="Solusi :" />
                            <textarea
                                id={solusi}
                                className="bg-zinc-100 rounded-md w-full h-28 border-gray-200 text-gray-700 p-4 resize-none"
                                value={solusi}
                                disabled
                            ></textarea>
                        </div>
                        <div className="w-full flex">
                            <Link
                                href={route("konsultasi.index")}
                                className="text-center px-4 py-2 w-full bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2focus:ring-offset-2 transition ease-in-out duration-150 shadow-md shadow-indigo-300 hover:shadow-indigo-700"
                            >
                                DiagnosaUlang
                            </Link>
                        </div>
                    </div>
                    <div className="border-b boreder-px border-zinc-200" />
                    <p className="text-center mb-0">
                        Presented by{" "}
                        <Link
                            href=""
                            className="text-indigo-500"
                            target="_blank"
                        >
                            Ando and Team
                        </Link>
                    </p>
                </div>
            </MainLayout>
        </>
    );
};

export default Hasil;
