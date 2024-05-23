import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Breadcrumb from "../Components/Breadcrumb";

export default function DashboardLayout({ user, children }) {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [isShow, setIsShow] = React.useState(false);
    const handleSidebar = () => {
        setSidebarOpen((previousState) => !previousState);
        setIsShow((previousState) => !previousState);
    };
    return (
        <div className="bg-gray-100 min-h-screen overflow-x-hidden flex relative">
            <Sidebar
                sidebarOpen={sidebarOpen}
                name={user.name}
                email={user.email}
            />
            <div className="flex-1 flex flex-col w-auto">
                <Navbar
                    name={user.name}
                    email={user.email}
                    onClick={handleSidebar}
                    isShow={isShow}
                    className="sticky top-0 z-20"
                />
                <main className="flex flex-1 flex-col mt-6 px-0 sm:px-4 md:px-12">
                    <Breadcrumb className="rounded-md w-fit" />
                    <section className="h-screen overflow-y-hidden flex-1 md:py-2 md:pe-2">
                        {children}
                    </section>
                </main>
                <footer className="bg-transparent mt-4 block md:hidden">
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
        </div>
    );
}
