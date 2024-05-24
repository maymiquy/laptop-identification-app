import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import InputLabel from "../../Components/InputLabel";
import TextInput from "../../Components/TextInput";
import InputError from "../../Components/InputError";
import PrimaryButton from "../../Components/PrimaryButton";

const Index = () => {
    const { data_os, auth } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        nama_lengkap: "",
        email: "",
        os: data_os.length > 0 ? data_os[0].nama : "",
    });

    console.log("Input :", data);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("konsultasi.store"), data);
    };

    return (
        <>
            <Head title="Selamat Datang" />
            <MainLayout session={auth.user}>
                <div className="flex flex-col space-y-4 px-4 pb-4 pt-4">
                    <div className="text-center mb-4">
                        <h2 className="mb-1 text-2xl font-bold">
                            Selamat Datang
                        </h2>
                        <p className="italic">
                            Sistem Pakar Diagnosa Kerusakan Komputer
                        </p>
                    </div>
                    <div className="border-b boreder-px border-zinc-200" />
                    <div className="relative">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col w-full">
                                <div className="mb-3 w-full">
                                    <InputLabel
                                        htmlFor="nama_lengkap"
                                        value="Nama Lengkap"
                                    />
                                    <TextInput
                                        id="nama_lengkap"
                                        type="text"
                                        name="nama_lengkap"
                                        placeholder="Masukkan nama lengkap Anda"
                                        value={data.nama_lengkap}
                                        required
                                        autoComplete="off"
                                        className={`w-full text-xs ${
                                            errors.nama_lengkap
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        onChange={(e) =>
                                            setData(
                                                "nama_lengkap",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.nama_lengkap}
                                        className="w-full text-start"
                                    />
                                </div>
                                <div className="mb-3 w-full">
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Masukkan email Anda"
                                        value={data.email}
                                        required
                                        autoComplete="off"
                                        className={`w-full text-xs ${
                                            errors.email ? "is-invalid" : ""
                                        }`}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="w-full text-start"
                                    />
                                </div>
                                <div className="mb-3">
                                    <InputLabel
                                        htmlFor="os"
                                        value="Sistem Operasi"
                                    />

                                    <select
                                        id="os"
                                        name="os"
                                        className={`w-full border-gray-300 text-xs focus:text-xs focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm`}
                                        value={data.os}
                                        required
                                        onChange={(e) =>
                                            setData("os", e.target.value)
                                        }
                                    >
                                        {data_os.map((os) => (
                                            <option
                                                className="text-xs"
                                                value={os.nama}
                                                key={os.id}
                                            >
                                                {os.nama}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError
                                        message={errors.os}
                                        className="text-start"
                                    />
                                </div>
                            </div>

                            <PrimaryButton
                                type="submit"
                                className="text-center justify-center w-full py-2 px-4 mt-2 mb-2"
                                disabled={processing}
                            >
                                Mulai Konsultasi
                            </PrimaryButton>
                        </form>
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

export default Index;
