import { useRef, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";
import ProjectCard from "../components/ProjectCard";
import ProjectsModal from "../components/ProjectsModal";
import Button from "../components/Button";
import { showcaseProjects, featuredProjectIds } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = featuredProjectIds.map((id) =>
    showcaseProjects.find((project) => project.id === id)
);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useGSAP(() => {
        gsap.fromTo(
            ".featured-project-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".featured-project-grid",
                    start: "top 85%",
                    toggleActions: "play none none none",
                    once: true,
                },
            }
        );

        if (sectionRef.current) {
            gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
        }
    }, []);

    return (
        <section id="work" ref={sectionRef} className="flex-center px-5 md:px-10 xl:px-0">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Featured Projects" />

                <div className="project-grid featured-project-grid mt-16">
                    {featuredProjects.map((project) => (
                        <div key={project.id} className="featured-project-card">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Button
                        text="View All"
                        className="md:w-56 md:h-14 w-44 h-11"
                        onClick={() => setIsModalOpen(true)}
                    />
                </div>
            </div>

            <ProjectsModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
export default ShowcaseSection
