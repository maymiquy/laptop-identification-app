import { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

export default function Authenticated({ user, header, children }) {
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

                    <div className="flex flex-col w-full">
                        {header && (
                            <header className="bg-white shadow">
                                <div className="max-w-7xl text-center mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                    {header}
                                </div>
                            </header>
                        )}

                        <main className="overflow-y-auto md:py-2 md:pe-2">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}
