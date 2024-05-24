import { Link, usePage } from "@inertiajs/react";
import PrimaryButton from "../Components/PrimaryButton";
import ApplicationLogo from "../Components/ApplicationLogo";

const MainLayout = ({ children, session }) => {
    const { url } = usePage();

    return (
        <div className="flex flex-col justify-between min-h-screen">
            <header className="flex justify-end me-4 my-2 z-30">
                {session && url === "/konsultasi" && (
                    <Link href="/dashboard">
                        <PrimaryButton className="px-4 py-2 text-xs md:text-sm font-bold">
                            Dashboard
                        </PrimaryButton>
                    </Link>
                )}

                {!session && url === "/konsultasi" && (
                    <Link href="/login">
                        <PrimaryButton className="px-4 py-2 text-xs md:text-sm font-bold">
                            Login
                        </PrimaryButton>
                    </Link>
                )}

                {url === "/login" && (
                    <Link href="/konsultasi">
                        <PrimaryButton className="px-4 py-2 text-xs md:text-sm font-bold">
                            Kembali
                        </PrimaryButton>
                    </Link>
                )}
            </header>
            <main className="flex flex-col py-2 px-6">
                <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-70">
                    <ApplicationLogo className="w-full min-h-screen" />
                </div>
                <section className="flex justify-center items-center">
                    <div className="w-full z-20 sm:max-w-xl px-6 py-4 bg-white bg-opacity-90 shadow-xl overflow-hidden sm:rounded-lg">
                        {children}
                    </div>
                </section>
            </main>
            <footer className="bg-transparent z-10 mt-4">
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
