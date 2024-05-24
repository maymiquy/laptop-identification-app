import React from "react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import { menuLink } from "../utils/menuLink";
import ResponsiveNavLink from "./ResponsiveNavLink";

export default function Sidebar(props) {
    const { className, sidebarOpen, email, name } = props;

    return (
        <aside
            className={`${className} bg-white z-10 h-auto min-w-60 overflow-hidden text-gray-600 justify-center shadow-md ${
                sidebarOpen ? "hidden md:flex" : "hidden"
            }`}
        >
            <div className="space-y-4 grid grid-flow-row justify-items-center w-full">
                <div className="flex flex-col justify-center items-center w-full self-start">
                    <Link href="/" className="py-[18.5px]">
                        <ApplicationLogo className="block fill-current text-gray-800" />
                    </Link>
                    {menuLink.map((items, index) => (
                        <React.Fragment key={index}>
                            <ResponsiveNavLink
                                className="text-sm"
                                key={index}
                                href={route(items.link)}
                                active={route().current(items.link)}
                            >
                                {items.title}
                            </ResponsiveNavLink>
                            <div
                                key={items.title}
                                className="w-full border-b"
                            />
                        </React.Fragment>
                    ))}
                </div>
                <div className="px-4 py-3 bg-zinc-50 flex items-center justify-center w-full border-t border-gray-200 h-1/3 self-end">
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
                </div>
            </div>
        </aside>
    );
}
