import React from "react";
import DashboardLayout from "../../../Layouts/DashboardLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import InputError from "../../../Components/InputError";
import InputLabel from "../../../Components/InputLabel";
import PrimaryButton from "../../../Components/PrimaryButton";
import TextInput from "../../../Components/TextInput";
import SecondaryButton from "../../../Components/SecondaryButton";

const Create = () => {
    const { auth } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("dashboard.os.store"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <Head title="OS" />
            <DashboardLayout user={auth.user}>
                <div className="py-4 md:py-6">
                    <div className="max-w-7xl flex-col flex justify-between mx-auto">
                        <div className="bg-white flex flex-col items-center shadow-md space-y-8 rounded-md md:rounded-lg pt-3 pb-6 px-6 md:px-8">
                            <div className="flex flex-col w-full gap-4 py-2 justify-start">
                                <h1 className="text-2xl">Tambah Data OS</h1>
                            </div>
                            <form onSubmit={onSubmit} className="w-full">
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <InputLabel
                                            forInput="nama"
                                            value="Nama OS"
                                        />
                                        <TextInput
                                            id="nama"
                                            value={data.nama}
                                            onChange={(e) =>
                                                setData("nama", e.target.value)
                                            }
                                            className="mt-1 block w-full"
                                            autoComplete="nama"
                                        />
                                        <InputError
                                            message={errors.nama}
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
                                    <Link href={route("os.index")}>
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
