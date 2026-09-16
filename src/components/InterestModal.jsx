import { useEffect } from "react";

const InterestModal = ({ interest, onClose }) => {
    useEffect(() => {
        if (!interest) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [interest, onClose]);

    if (!interest) return null;

    return (
        <div
            className="experience-modal-backdrop"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="experience-modal-panel">
                <button className="experience-modal-close" onClick={onClose} aria-label="Close">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </button>

                <h1 className="font-bold text-xl md:text-2xl text-white-50">{interest.name}</h1>
                <p className="text-white-50 text-sm md:text-base mt-4">More details coming soon.</p>
            </div>
        </div>
    );
};

export default InterestModal;
