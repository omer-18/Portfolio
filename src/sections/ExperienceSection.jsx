import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import ExperienceModal from "../components/ExperienceModal";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);

    useGSAP(() => {
        // Animate each card's timeline segment independently as the user
        // scrolls it into view, so the line draws itself progressively
        // down the page rather than all segments revealing at once
        gsap.utils.toArray(".timeline").forEach((timelineEl) => {
            gsap.to(timelineEl, {
                transformOrigin: "bottom bottom",
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: timelineEl,
                    start: "top center",
                    end: "70% center",
                    onUpdate: (self) => {
                        gsap.to(timelineEl, {
                            scaleY: 1 - self.progress,
                        });
                    },
                },
            });
        });

        // Loop through each expText element and animate them in
        // as the user scrolls to each text element
        gsap.utils.toArray(".expText").forEach((text) => {
            gsap.from(text, {
                opacity: 0,
                xPercent: 0,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: text,
                    start: "top 60%",
                },
            });
        }, "<");
    }, []);

    return (
        <section
            id="experience"
            className="flex-center px-5 md:px-10 xl:px-0"
        >
            <div className="w-full h-full xl:px-32 md:px-16 px-8">
                <TitleHeader
                    title="Experience"
                />
                <div className="mt-12 relative">
                    <div className="relative z-50 grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-14 xl:gap-y-20 max-w-6xl mx-auto">
                        {expCards.map((card) => (
                            <div key={card.company} className="exp-card-wrapper">
                                <div className="w-full relative">
                                    <div className="expText grid grid-cols-[45px_1fr] md:grid-cols-[80px_1fr] gap-6 md:gap-10 items-start relative z-20">
                                        <div className="timeline-logo">
                                            {card.logoPath ? (
                                                <img src={card.logoPath} alt={card.company} />
                                            ) : (
                                                <div className="timeline-logo-fallback">
                                                    {card.company.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            className="exp-row min-w-0"
                                            onClick={() => setSelectedExperience(card)}
                                        >
                                            <p className="text-white-50 text-sm">
                                                {card.dateRange}
                                            </p>
                                            <h1 className="font-semibold text-xl md:text-2xl mt-2">
                                                {card.company}
                                            </h1>
                                            <p className="text-[#839CB5] text-base md:text-lg mt-1">
                                                {card.role}
                                            </p>
                                            <p className="text-white-50 text-sm md:text-base mt-3 max-w-[260px] md:max-w-[320px]">
                                                {card.teaser}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-wrapper">
                                        <div className="timeline" />
                                        <div className="gradient-line w-1 h-full" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ExperienceModal experience={selectedExperience} onClose={() => setSelectedExperience(null)} />
        </section>
    );
};

export default Experience;
