import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const ModalMessage = ({ message, type, onClose, show }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let timer;
        if (message && show) {
            setShowModal(true);
            timer = setTimeout(() => {
                setShowModal(false);
                onClose();
            }, 2000);
        } else {
            setShowModal(false);
        }

        return () => clearTimeout(timer);
    }, [message, onClose, show]);

    return (
        <Modal show={showModal}>
            <div
                className={`p-6 bg-white rounded-md shadow-md ${
                    type === "success"
                        ? "border-green-500 border-l-8"
                        : "border-red-500 border-l-8"
                }`}
            >
                <h3
                    className={`text-lg font-medium ${
                        type === "success" ? "text-green-500" : "text-red-500"
                    }`}
                >
                    {type === "success" ? "Success" : "Error"}
                </h3>
                <p className="mt-2 text-gray-700">{message}</p>
            </div>
        </Modal>
    );
};

export default ModalMessage;
