import { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Breadcrumb from "../Components/Breadcrumb";

export default function Dashboard({ user, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isShow, setIsShow] = useState(false);
    const handleSidebar = () => {
        setSidebarOpen((previousState) => !previousState);
        setIsShow((previousState) => !previousState);
    };
    return (
        <div className="bg-gray-100 min-h-screen flex relative">
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
                <main className="flex flex-1 flex-col mt-6 px-6 md:px-12">
                    <Breadcrumb className="rounded-md w-fit" />
                    <section className="h-screen overflow-y-auto flex-1 md:py-2 md:pe-2">
                        {children}
                    </section>
                </main>
            </div>
        </div>
    );
}
