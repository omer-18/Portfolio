import { useEffect } from "react";

const ExperienceModal = ({ experience, onClose }) => {
    useEffect(() => {
        if (!experience) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [experience, onClose]);

    if (!experience) return null;

    const { logoPath, company, role, dateRange, location, link, overview, bullets, techStack } = experience;

    return (
        <div
            className="experience-modal-backdrop"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="experience-modal-panel">
                <a
                    href={link ?? "#"}
                    target={link ? "_blank" : undefined}
                    rel={link ? "noopener noreferrer" : undefined}
                    className={`experience-modal-link ${link ? "" : "disabled"}`}
                    aria-label="Visit company"
                >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 5H19V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 5L10 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 13V18C18 18.5523 17.5523 19 17 19H6C5.44772 19 5 18.5523 5 18V7C5 6.44772 5.44772 6 6 6H11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>

                <button className="experience-modal-close" onClick={onClose} aria-label="Close">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </button>

                <div className="flex items-center gap-4">
                    <div className="experience-modal-logo">
                        {logoPath ? (
                            <img src={logoPath} alt={company} />
                        ) : (
                            <div className="timeline-logo-fallback">{company.charAt(0)}</div>
                        )}
                    </div>
                    <div>
                        <h1 className="font-bold text-xl md:text-2xl text-white-50">{company}</h1>
                        <p className="text-[#839CB5] text-sm md:text-base mt-1">{role}</p>
                        <p className="text-white-50 text-xs md:text-sm mt-1">
                            {dateRange}{location ? ` | ${location}` : ""}
                        </p>
                    </div>
                </div>

                <div className="divider-line my-6" />

                <p className="text-white-50 text-sm md:text-base leading-relaxed">{overview}</p>

                <div className="flex flex-col gap-3 mt-6">
                    {bullets.map((bullet, index) => (
                        <div key={index} className="exp-bullet-block">
                            {bullet}
                        </div>
                    ))}
                </div>

                <div className="divider-line my-6" />

                <p className="text-[#839CB5] text-xs md:text-sm tracking-wide uppercase mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceModal;
