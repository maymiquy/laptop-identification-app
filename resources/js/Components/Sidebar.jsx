import React from "react";
import NavLink from "./NavLink";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";

export default function Sidebar(props) {
    const { className, sidebarOpen, email, name } = props;
    const menuLink = [
        {
            title: "Dasboard",
            link: "dashboard",
        },
        {
            title: "Gejala",
            link: "gejala.index",
        },
        {
            title: "Kerusakan",
            link: "gejala.store",
        },
        {
            title: "OS",
            link: "gejala.create",
        },
        {
            title: "Aturan",
            link: "gejala.create",
        },
    ];

    return (
        <aside
            className={`${className} bg-white w-1/3 md:w-1/6 overflow-hidden text-gray-600 justify-center shadow-md ${
                sidebarOpen ? "hidden md:flex" : "hidden"
            }`}
        >
            <div className="space-y-4 grid grid-flow-row justify-items-center w-full">
                <div className="flex flex-col justify-center items-center w-full self-start">
                    <Link href="/" className="py-[18.5px]">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                    </Link>
                    {menuLink.map((items, index) => (
                        <Link
                            key={index}
                            className={`space-y-4 py-2 px-4 justify-center text-sm font-medium border-b w-full ${
                                route().current(items.link)
                                    ? "bg-gray-100 text-gray-900"
                                    : "hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                            }`}
                            href={route(items.link)}
                        >
                            <span>{items.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="px-4 py-3 flex items-center justify-center w-full border-t border-gray-200 h-1/3 self-end">
                    <div className="ml-3 leading-tight">
                        <div className="text-sm font-semibold">{name}</div>
                        <div className="text-xs text-gray-400">{email}</div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
