import { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Breadcrumb from "../Components/Breadcrumb";

export default function Dashboard({ user, header, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isShow, setIsShow] = useState(false);
    const handleSidebar = () => {
        setSidebarOpen((previousState) => !previousState);
        setIsShow((previousState) => !previousState);
    };
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <div className="flex-1 flex flex-col">
                <Navbar
                    name={user.name}
                    email={user.email}
                    onClick={handleSidebar}
                    isShow={isShow}
                />

                <div className="flex flex-1">
                    <Sidebar
                        sidebarOpen={sidebarOpen}
                        name={user.name}
                        email={user.email}
                        className="flex-shrink-0"
                    />

                    <div className="flex flex-col w-full py-2 md:py-4">
                        <div className="ps-8">
                            <Breadcrumb className="rounded-md w-fit" />
                        </div>
                        <main className="overflow-y-auto md:py-2 md:pe-2">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}
