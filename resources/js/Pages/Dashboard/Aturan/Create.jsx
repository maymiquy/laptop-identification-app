import React from "react";
import DashboardLayout from "../../../Layouts/DashboardLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import InputError from "../../../Components/InputError";
import InputLabel from "../../../Components/InputLabel";
import PrimaryButton from "../../../Components/PrimaryButton";
import TextInput from "../../../Components/TextInput";
import SecondaryButton from "../../../Components/SecondaryButton";

const Create = () => {
    const { auth, newCode, gejala, aturan } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        kode_aturan: newCode,
        gejala_id: null,
        gejala_sebelum: null,
        next_true: null,
        next_false: null,
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("dashboard.aturan.store"), {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <>
            <Head title="Aturan" />
            <DashboardLayout user={auth.user}>
                <div className="py-4 md:py-6">
                    <div className="max-w-7xl flex-col flex justify-between mx-auto">
                        <div className="bg-white flex flex-col items-center shadow-md space-y-8 rounded-md md:rounded-lg pt-3 pb-6 px-6 md:px-8">
                            <div className="flex flex-col w-full gap-4 py-2 justify-start">
                                <h1 className="text-2xl">Tambah Data Aturan</h1>
                            </div>
                            <form onSubmit={onSubmit} className="w-full">
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <InputLabel
                                            forInput="kode_aturan"
                                            value="Kode Aturan"
                                        />
                                        <TextInput
                                            id="kode_aturan"
                                            value={data.kode_aturan}
                                            className="mt-1 block w-full bg-gray-200 cursor-not-allowed"
                                            readOnly
                                        />
                                        <InputError
                                            message={errors.kode_aturan}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            forInput="gejala_id"
                                            value="Gejala"
                                        />
                                        <select
                                            id="gejala_id"
                                            value={data.gejala_id}
                                            onChange={(e) =>
                                                setData(
                                                    "gejala_id",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        >
                                            <option selected disabled>
                                                Select Gejala
                                            </option>
                                            {gejala.map((item) => (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    {item.kode_gejala} -{" "}
                                                    {item.nama_gejala}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.gejala_id}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            forInput="gejala_sebelum"
                                            value="Gejala Sebelumnya"
                                        />
                                        <select
                                            id="gejala_sebelum"
                                            value={data.gejala_sebelum}
                                            onChange={(e) =>
                                                setData(
                                                    "gejala_sebelum",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option disabled selected>
                                                Select Gejala Sebelumnya
                                            </option>
                                            <option value={null}>
                                                Tidak ada gejala
                                            </option>
                                            {gejala.map((item) => (
                                                <option
                                                    key={item.kode_gejala}
                                                    value={item.kode_gejala}
                                                >
                                                    {item.kode_gejala} -{" "}
                                                    {item.nama_gejala}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.gejala_sebelum}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="flex flex-row-reverse justify-center items-center gap-4 md:gap-8">
                                        <div className="w-auto md:w-1/2">
                                            <InputLabel
                                                forInput="next_true"
                                                value="JIKA IYA"
                                            />
                                            <select
                                                id="next_true"
                                                value={data.next_true}
                                                onChange={(e) =>
                                                    setData(
                                                        "next_true",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option disabled selected>
                                                    Select Jika Iya
                                                </option>
                                                <option value="">
                                                    Tidak ada tindakan
                                                    selanjutnya
                                                </option>
                                                {gejala.map((item) => (
                                                    <option
                                                        key={item.kode_gejala}
                                                        value={item.kode_gejala}
                                                    >
                                                        {item.kode_gejala} -{" "}
                                                        {item.nama_gejala}
                                                    </option>
                                                ))}
                                                {aturan.map((item) => (
                                                    <option
                                                        key={
                                                            item.kode_kerusakan
                                                        }
                                                        value={
                                                            item.kode_kerusakan
                                                        }
                                                    >
                                                        {item.kode_kerusakan} -{" "}
                                                        {item.nama_kerusakan}
                                                    </option>
                                                ))}
                                            </select>
                                            <InputError
                                                message={errors.next_true}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="w-auto md:w-1/2">
                                            <InputLabel
                                                forInput="next_false"
                                                value="JIKA TIDAK"
                                            />
                                            <select
                                                id="next_false"
                                                value={data.next_false}
                                                onChange={(e) =>
                                                    setData(
                                                        "next_false",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option disabled selected>
                                                    Select Jika Tidak
                                                </option>
                                                <option value="">
                                                    Tidak ada tindakan
                                                    selanjutnya
                                                </option>
                                                {gejala.map((item) => (
                                                    <option
                                                        key={item.kode_gejala}
                                                        value={item.kode_gejala}
                                                    >
                                                        {item.kode_gejala} -{" "}
                                                        {item.nama_gejala}
                                                    </option>
                                                ))}
                                                {aturan.map((item) => (
                                                    <option
                                                        key={
                                                            item.kode_kerusakan
                                                        }
                                                        value={
                                                            item.kode_kerusakan
                                                        }
                                                    >
                                                        {item.kode_kerusakan} -{" "}
                                                        {item.nama_kerusakan}
                                                    </option>
                                                ))}
                                            </select>
                                            <InputError
                                                message={errors.next_false}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row-reverse items-center w-full justify-start mt-4">
                                    <PrimaryButton
                                        type="submit"
                                        className="ml-4"
                                        disabled={processing}
                                    >
                                        Simpan
                                    </PrimaryButton>
                                    <Link href={route("aturan.index")}>
                                        <SecondaryButton className="justify-center">
                                            Kembali
                                        </SecondaryButton>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
};

export default Create;
