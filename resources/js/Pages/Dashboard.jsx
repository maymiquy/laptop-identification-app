import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Table from "../Components/Table";

export default function Dashboard({ auth }) {
    const products = [
        { id: 1, name: "Product A", price: 19.99, stock: 50 },
        { id: 2, name: "Product B", price: 29.99, stock: 30 },
        { id: 3, name: "Product C", price: 14.99, stock: 80 },
        { id: 4, name: "Product D", price: 24.99, stock: 40 },
        { id: 5, name: "Product E", price: 9.99, stock: 60 },
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg gap-4 py-6 px-10">
                        <h1 className="text-center">Product Table</h1>
                        <Table.Root>
                            <Table.Head
                                columns={["ID", "Name", "Price", "Stock"]}
                            />
                            <Table.Body
                                columns={["id", "name", "price", "stock"]}
                                data={products}
                            />
                        </Table.Root>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
