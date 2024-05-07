import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import NavLink from "./NavLink";
import Dropdown from "./Dropdown";
import ResponsiveNavLink from "./ResponsiveNavLink";
import { useState } from "react";

export default function Navbar(props) {
    const { onClick, name, email, isShow } = props;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

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
        <nav className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-3">
                <div className="flex justify-between h-16">
                    <div className="shrink-0 flex gap-10 items-center">
                        <div className="-me-2 md:flex items-center hidden">
                            <button
                                onClick={onClick}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <Link href="/" className="flex md:hidden">
                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                        </Link>
                    </div>
                    <div
                        className={`hidden justify-self-center space-x-8 md:-my-px md:ms-10 md:${
                            isShow === true ? "flex" : "hidden"
                        }`}
                    >
                        {menuLink.map((items, index) => (
                            <NavLink
                                key={index}
                                href={route(items.link)}
                                active={route().current(items.link)}
                            >
                                {items.title}
                            </NavLink>
                        ))}
                    </div>
                    <div className="hidden md:flex md:items-center md:ms-6">
                        <div className="ms-3 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {name}

                                            <svg
                                                className="ms-2 -me-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="-me-2 flex items-center md:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " md:hidden"
                }
            >
                <div className="pt-2 pb-3 space-y-1">
                    {menuLink.map((items, index) => (
                        <ResponsiveNavLink
                            key={index}
                            href={route(items.link)}
                            active={route().current(items.link)}
                        >
                            {items.title}
                        </ResponsiveNavLink>
                    ))}
                </div>

                <div className="pt-4 pb-1 border-t border-gray-200">
                    <div className="px-4">
                        <div className="font-medium text-base text-gray-800">
                            {name}
                        </div>
                        <div className="font-medium text-sm text-gray-500">
                            {email}
                        </div>
                    </div>

                    <div className="mt-3 space-y-1">
                        <ResponsiveNavLink
                            method="post"
                            href={route("logout")}
                            as="button"
                        >
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
