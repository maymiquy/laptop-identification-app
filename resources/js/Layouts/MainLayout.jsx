import { Link, usePage } from "@inertiajs/react";
import PrimaryButton from "../Components/PrimaryButton";

const MainLayout = ({ children, session }) => {
    const { url } = usePage();

    return (
        <div className="flex flex-col min-h-screen justify-between py-2 px-6">
            <div className="flex justify-end">
                {session && url === "/konsultasi" && (
                    <Link href="/dashboard">
                        <PrimaryButton className="px-4 py-2 text-[10px] md:text-xs">
                            Dashboard
                        </PrimaryButton>
                    </Link>
                )}

                {!session && url === "/konsultasi" && (
                    <Link href="/login">
                        <PrimaryButton className="px-4 py-2 text-[10px] md:text-xs">
                            Login
                        </PrimaryButton>
                    </Link>
                )}

                {url === "/login" && (
                    <Link href="/konsultasi">
                        <PrimaryButton className="px-4 py-2 text-[10px] md:text-xs">
                            Kembali
                        </PrimaryButton>
                    </Link>
                )}
            </div>

            <section className="flex justify-center items-center">
                <div className="w-full sm:max-w-md px-6 py-4 md:px-8 md:py-6 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </section>

            <footer className="bg-transparent">
                <div className="container mx-auto py-2">
                    <div className="text-center text-zinc-700 text-sm md:text-md">
                        © {new Date().getFullYear()} made by{" "}
                        <a
                            href=""
                            target="_blank"
                            className="font-bold underline"
                        >
                            SpankCode
                        </a>
                        ❤️
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
