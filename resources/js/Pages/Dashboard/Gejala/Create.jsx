import React from "react";
import DashboardLayout from "../../../Layouts/DashboardLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import InputError from "../../../Components/InputError";
import InputLabel from "../../../Components/InputLabel";
import PrimaryButton from "../../../Components/PrimaryButton";
import TextInput from "../../../Components/TextInput";
import SecondaryButton from "../../../Components/SecondaryButton";

const Create = () => {
    const { auth, newCode } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        kode_gejala: newCode,
        nama_gejala: "",
        pertanyaan: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("dashboard.gejala.store"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <Head title="Gejala - Tambah" />
            <DashboardLayout user={auth.user}>
                <div className="py-4 md:py-6">
                    <div className="max-w-7xl flex-col flex justify-between mx-auto">
                        <div className="bg-white flex flex-col items-center shadow-md space-y-8 rounded-md md:rounded-lg pt-3 pb-6 px-6 md:px-8">
                            <div className="flex flex-col w-full gap-4 py-2 justify-start">
                                <h1 className="text-2xl">Tambah Data Gejala</h1>
                            </div>
                            <form onSubmit={onSubmit} className="w-full">
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <InputLabel
                                            forInput="kode_gejala"
                                            value="Kode Gejala"
                                        />
                                        <TextInput
                                            id="kode_gejala"
                                            value={data.kode_gejala}
                                            className="mt-1 block w-full bg-gray-200 cursor-not-allowed"
                                            readOnly
                                        />
                                        <InputError
                                            message={errors.kode_gejala}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            forInput="nama_gejala"
                                            value="Nama Gejala"
                                        />
                                        <TextInput
                                            id="nama_gejala"
                                            value={data.nama_gejala}
                                            onChange={(e) =>
                                                setData(
                                                    "nama_gejala",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 block w-full"
                                            autoComplete="nama_gejala"
                                        />
                                        <InputError
                                            message={errors.nama_gejala}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            forInput="pertanyaan"
                                            value="Pertanyaan"
                                        />
                                        <TextInput
                                            id="pertanyaan"
                                            value={data.pertanyaan}
                                            onChange={(e) =>
                                                setData(
                                                    "pertanyaan",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 block w-full"
                                            autoComplete="pertanyaan"
                                        />
                                        <InputError
                                            message={errors.pertanyaan}
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
                                    <Link href={route("gejala.index")}>
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
