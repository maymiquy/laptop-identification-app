import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Index() {
    const { auth } = usePage().props;
    const user = auth.user;

    return (
        <>
            <Head title="Dashboard" />
            <DashboardLayout user={auth.user}>
                <div className="py-4 md:py-6">
                    <div className="max-w-full mx-auto">
                        <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                            <div className="p-6 text-gray-900">
                                Wellcome back{" "}
                                <span className="text-indigo-500 font-semibold">
                                    {user.name}
                                </span>
                                !
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
}
