import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";
import InterestModal from "../components/InterestModal.jsx";
import { personalInterests } from "../constants";

const PersonalInterests = () => {
    const [selectedInterest, setSelectedInterest] = useState(null);
    const dragStart = useRef(null);

    const handlePointerDown = (e) => {
        dragStart.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = (e, interest) => {
        const start = dragStart.current;
        if (!start) return;
        const distance = Math.hypot(e.clientX - start.x, e.clientY - start.y);
        if (distance < 5) {
            setSelectedInterest(interest);
        }
    };

    useGSAP(() => {
        gsap.fromTo(
            ".tech-card",
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#interests",
                    start: "top center",
                },
            }
        );
    });

    return (
        <div id="interests" className="flex-center px-5 md:px-10">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Outside of Work"
                />
                <div className="interests-grid">
                    {personalInterests.map((interest) => (
                        <div
                            key={interest.name}
                            className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg cursor-pointer"
                            onPointerDown={handlePointerDown}
                            onPointerUp={(e) => handlePointerUp(e, interest)}
                        >
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIcon model={interest} />
                                </div>
                                <div className="padding-x w-full">
                                    <p>{interest.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <InterestModal interest={selectedInterest} onClose={() => setSelectedInterest(null)} />
        </div>
    );
};

export default PersonalInterests;
