import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Dialog({ isOpen, onClose, children }) {
    useEffect(() => {
        if (!isOpen) return;

        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={onClose}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn" />

            {/* Dialog */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-scaleIn"
            >
                {children}

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition"
                    >
                        Закрыть
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}

