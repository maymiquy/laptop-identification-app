import Navbar from "../Components/Navbar";

export default function Authenticated({ user, header, children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar name={user.name} email={user.email} />

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl text-center mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
            <main className="h-full flex-1 overflow-y-auto md:py-2 md:pe-2">
                {children}
            </main>
        </div>
    );
}
