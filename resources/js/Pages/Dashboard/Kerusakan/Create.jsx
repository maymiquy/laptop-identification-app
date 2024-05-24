import React from "react";
import DashboardLayout from "../../../Layouts/DashboardLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import InputError from "../../../Components/InputError";
import InputLabel from "../../../Components/InputLabel";
import PrimaryButton from "../../../Components/PrimaryButton";
import TextInput from "../../../Components/TextInput";
import SecondaryButton from "../../../Components/SecondaryButton";

const Create = () => {
    const { auth, newCode, data_gejala } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        kode_kerusakan: newCode,
        nama_kerusakan: "",
        solusi: "",
        gejala: [],
    });

    const handleGejalaChange = (kodeGejala) => {
        setData(
            "gejala",
            data.gejala.includes(kodeGejala)
                ? data.gejala.filter(
                      (kode_gejala) => kode_gejala !== kodeGejala
                  )
                : [...data.gejala, kodeGejala]
        );
    };

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("dashboard.kerusakan.store"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <Head title="Kerusakan" />
            <DashboardLayout user={auth.user}>
                <div className="py-4 md:py-6">
                    <div className="max-w-7xl flex-col flex justify-between mx-auto">
                        <div className="bg-white flex flex-col items-center shadow-md space-y-8 rounded-md md:rounded-lg pt-3 pb-6 px-6 md:px-8">
                            <div className="flex flex-col w-full gap-4 py-2 justify-start">
                                <h1 className="text-2xl">
                                    Tambah Data Kerusakan
                                </h1>
                            </div>
                            <form onSubmit={onSubmit} className="w-full">
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <InputLabel
                                            forInput="kode_kerusakan"
                                            value="Kode Kerusakan"
                                        />
                                        <TextInput
                                            id="kode_kerusakan"
                                            value={data.kode_kerusakan}
                                            className="mt-1 block w-full bg-gray-200 cursor-not-allowed"
                                            readOnly
                                        />
                                        <InputError
                                            message={errors.kode_kerusakan}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            forInput="nama_kerusakan"
                                            value="Nama Kerusakan"
                                        />
                                        <TextInput
                                            id="nama_kerusakan"
                                            value={data.nama_kerusakan}
                                            onChange={(e) =>
                                                setData(
                                                    "nama_kerusakan",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 block w-full"
                                            autoComplete="nama_kerusakan"
                                        />
                                        <InputError
                                            message={errors.nama_kerusakan}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            forInput="solusi"
                                            value="Solusi"
                                        />
                                        <TextInput
                                            id="solusi"
                                            value={data.solusi}
                                            onChange={(e) =>
                                                setData(
                                                    "solusi",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 block w-full"
                                            autoComplete="solusi"
                                        />
                                        <InputError
                                            message={errors.solusi}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            forInput="gejala"
                                            value="Gejala"
                                        />
                                        <div className="grid grid-cols-5 md:grid-cols-10 gap-2 md:gap-4">
                                            {data_gejala.map(
                                                (gejala, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center"
                                                    >
                                                        <input
                                                            id={`gejala-${gejala.kode_gejala}`}
                                                            name="gejala[]"
                                                            type="checkbox"
                                                            value={
                                                                gejala.kode_gejala
                                                            }
                                                            checked={data.gejala.includes(
                                                                gejala.kode_gejala
                                                            )}
                                                            onChange={() =>
                                                                handleGejalaChange(
                                                                    gejala.kode_gejala
                                                                )
                                                            }
                                                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                                                        />
                                                        <label
                                                            htmlFor={`gejala-${gejala.kode_gejala}`}
                                                            className="ml-2 block text-sm text-gray-700"
                                                        >
                                                            {gejala.kode_gejala}
                                                        </label>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <InputError
                                            message={errors.gejala}
                                            className="mt-2"
                                        />
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
                                    <Link href={route("kerusakan.index")}>
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
