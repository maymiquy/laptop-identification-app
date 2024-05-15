import React, { useEffect, useState } from "react";
import { useForm, Link, usePage, Head } from "@inertiajs/react";
import MainLayout from "../../Layouts/MainLayout";
import PrimaryButton from "../../Components/PrimaryButton";
import InputLabel from "../../Components/InputLabel";

const Pertanyaan = () => {
    const { aturan, gejala, auth } = usePage().props;

    const { data, setData, errors, post, processing } = useForm({
        next: null,
    });

    const { pathName } = usePage().url;
    const [selectedNext, setSelectedNext] = useState(null);

    useEffect(() => {
        setSelectedNext(null);
    }, [pathName]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("konsultasi.next"), data);
    };

    return (
        <MainLayout session={auth.user}>
            <Head title="Konsultasi" />
            <div className="text-center border-b border-px border-zinc-300 mb-4">
                <h3 className="text-md font-normal mb-2">
                    Jawab pertanyaan berikut :
                </h3>
            </div>
            <form
                onSubmit={handleSubmit}
                className="space-y-8 flex flex-col items-center"
            >
                <h5 className="font-bold text-lg md:text-xl text-center">
                    {gejala.pertanyaan}
                </h5>
                <div className="flex flex-col-reverse justify-center items-center">
                    <div className="-mt-8 md:-mt-4 pb-2 flex overflow-hidden over w-1 h-1">
                        <input
                            className={`border-none bg-transparent rounded-md focus:outline-none focus:ring-transparent`}
                            type="radio"
                            id="next"
                            value={processing}
                            name="next"
                            required
                            checked={null}
                        />
                    </div>
                    <div className="flex flex-row-reverse justify-between gap-20 md:gap-32 px-10">
                        <div className="flex flex-col gap-[2px] justify-center items-center">
                            <input
                                className={`form-radio w-[18px] h-[18px] rounded-md focus:outline-none focus:ring-transparent  ${
                                    aturan.next_true
                                        ? `focus:bg-transparent`
                                        : `focus:bg-indigo-600`
                                } checked:text-indigo-500 ${
                                    errors.next && "border-red-500"
                                }`}
                                type="radio"
                                id="next_true"
                                value={aturan.next_true}
                                name="next"
                                required
                                checked={selectedNext === aturan.next_true}
                                onChange={(e) => {
                                    setData("next", e.target.value);
                                    setSelectedNext(e.target.value);
                                }}
                            />
                            <InputLabel
                                value="Ya"
                                className="font-semibold uppercase"
                                htmlFor="next_true"
                            />
                        </div>
                        <div className="flex flex-col gap-[2px] justify-center items-center">
                            <input
                                className={`form-radio w-[18px] h-[18px] rounded-md focus:outline-none focus:ring-transparent  ${
                                    aturan.next_false
                                        ? `focus:bg-transparent`
                                        : `focus:bg-indigo-600`
                                } checked:text-indigo-500 ${
                                    errors.next && "border-red-500"
                                }`}
                                type="radio"
                                id="next_false"
                                value={aturan.next_false}
                                name="next"
                                required
                                checked={selectedNext === aturan.next_false}
                                onChange={(e) => {
                                    setData("next", e.target.value);
                                    setSelectedNext(e.target.value);
                                }}
                            />
                            <InputLabel
                                className="font-semibold uppercase"
                                value="Tidak"
                                htmlFor="next_false"
                            />
                        </div>
                        {errors.next && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.next[0]}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex gap-4 w-full px-4 pt-4">
                    {aturan.gejala_sebelum && (
                        <Link
                            href={route("konsultasi.question", {
                                gejala: aturan.gejala_sebelum,
                            })}
                            className="bg-transparent w-1/2 text-center font-bold text-indigo-600 px-4 py-2 rounded-md hover:bg-gray-200 focus:bg-gray-300 border border-indigo-300 shadow-sm shadow-indigo-600 hover:shadow-md hover:shadow-indigo-300"
                        >
                            Kembali
                        </Link>
                    )}
                    {!aturan.gejala_sebelum ? (
                        <PrimaryButton
                            className="w-full justify-center"
                            type="submit"
                        >
                            Lanjut
                        </PrimaryButton>
                    ) : (
                        <PrimaryButton
                            className="w-1/2 justify-center"
                            type="submit"
                        >
                            Lanjut
                        </PrimaryButton>
                    )}
                </div>
            </form>
        </MainLayout>
    );
};

export default Pertanyaan;
