import React, {useRef, useEffect} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);
    const project5Ref = useRef(null);
    const project6Ref = useRef(null);
    const project7Ref = useRef(null);
    const project8Ref = useRef(null);
    const project9Ref = useRef(null);
    const creationVideoRef = useRef(null);
    const pidVideoRef = useRef(null);
    const tradeGuardVideoRef = useRef(null);

    // Preload videos when component mounts to reduce lag on hover
    useEffect(() => {
        const preloadVideos = () => {
            if (creationVideoRef.current) {
                creationVideoRef.current.load();
            }
            if (pidVideoRef.current) {
                pidVideoRef.current.load();
            }
            if (tradeGuardVideoRef.current) {
                tradeGuardVideoRef.current.load();
            }
        };

        // Preload after a short delay to not block initial render
        const timer = setTimeout(preloadVideos, 500);
        return () => clearTimeout(timer);
    }, []);


    useGSAP( () => {
        const projects = [project1Ref.current, project2Ref.current,
            project3Ref.current, project4Ref.current, project5Ref.current,
            project6Ref.current, project7Ref.current, project8Ref.current,
            project9Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {y:50, opacity: 0},
                {
                    y:0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 *(index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=80'
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current,
            {opacity: 0},
            {opacity: 1, duration: 1.5})

    }, []);


    return (
        <section id = "work" ref = {sectionRef} className= "app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT*/}
                    <div className="first-project-wrapper group" ref = {project1Ref}>
                        <div className="image-wrapper">
                            <a href= "https://creation.builders" target = "_blank" rel="noopener noreferrer">
                                <video 
                                    ref={creationVideoRef}
                                    src="/videos/tire-finish-finish-video.mp4" 
                                    loop 
                                    muted 
                                    playsInline
                                    preload="auto"
                                    onMouseEnter={(e) => {
                                        const video = e.currentTarget;
                                        if (video.readyState >= 2) {
                                            video.play().catch(() => {});
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        const video = e.currentTarget;
                                        video.pause();
                                        video.currentTime = 0;
                                    }}
                                />
                            </a>
                        </div>
                        <div className="text-content">
                            <a href= "https://creation.builders" target = "_blank" rel="noopener noreferrer">
                                <h2>Creation: The Cursor for CAD</h2>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project group" ref = {project2Ref}>
                            <div className="image-wrapper bg-gradient-to-br from-rose-500/10 via-purple-500/10 to-pink-500/10 !p-3 sm:!p-4 !h-64 md:!h-48 lg:!h-60 xl:!h-[26vh]">
                                <a href= "https://devpost.com/software/clif-cj1ql7" target = "_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row gap-2 w-full h-full relative">
                                    <img src="/images/clif1.jpg" alt="CLIF Demo 1" className="flex-1 sm:w-1/2 h-full object-cover rounded-md" loading="lazy" />
                                    <img src="/images/clif2.jpg" alt="CLIF Demo 2" className="flex-1 sm:w-1/2 h-full object-cover rounded-md" loading="lazy" />
                                    <div className="project-overlay">
                                        <p className="project-description">
                                            A real-time sign language translator that converts ASL gestures into spoken text and speech using computer vision.
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                <a href= "https://github.com/omer-18/CLIF" target = "_blank" rel="noopener noreferrer">
                                    <h2>AI Sign Language to Speech Translator</h2>
                                </a>
                                <a href="https://github.com/omer-18/CLIF" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity flex-shrink-0">
                                    <img src="/images/github.png" alt="GitHub" className="w-7 h-7 md:w-10 md:h-10" />
                                </a>
                            </div>
                        </div>
                        <div className="project group" ref = {project3Ref}>
                            <div className="image-wrapper bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-yellow-500/10 !p-3 sm:!p-4 !h-64 md:!h-48 lg:!h-60 xl:!h-[26vh]">
                                <a href="https://drive.google.com/file/d/1TUBsWQnf_FG1uMiiiPaejTno2OFhLpOd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row gap-2 w-full h-full relative">
                                    <img src="/images/toyota1.jpg" alt="Toyota Challenge 1" className="flex-1 sm:w-1/2 h-full object-cover rounded-md" loading="lazy" />
                                    <img src="/images/toyota2.jpg" alt="Toyota Challenge 2" className="flex-1 sm:w-1/2 h-full object-cover rounded-md" loading="lazy" />
                                    <div className="project-overlay">
                                        <p className="project-description">
                                            An autonomous navigation system for factory robots that uses computer vision to recognize stop signs and LIDAR sensors to avoid obstacles, enabling safe automated transportation of vehicle parts.
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                <a href="https://drive.google.com/file/d/1TUBsWQnf_FG1uMiiiPaejTno2OFhLpOd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <h2>Toyota Innovation Challenge</h2>
                                </a>
                                <a href="https://github.com/jay-mango/Toyota_Challenge?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity flex-shrink-0">
                                    <img src="/images/github.png" alt="GitHub" className="w-7 h-7 md:w-10 md:h-10" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FLIPPED LAYOUT - Second Section */}
                <div className="showcaselayout mt-8 md:mt-12 xl:mt-16">
                    {/* LEFT - Two Projects Stacked */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project group" ref={project4Ref}>
                            <div className="image-wrapper bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10">
                                <a href="https://devpost.com/software/edgebin" target="_blank" rel="noopener noreferrer" className="relative">
                                    <img src="/images/edgebin2.png" alt="EDGEbin" loading="lazy" />
                                    <div className="project-overlay">
                                        <p className="project-description">
                                            A AI-driven garbage sorting machine that uses computer vision to automatically classify and sort waste into different categories with high accuracy.
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                <a href="https://devpost.com/software/edgebin" target="_blank" rel="noopener noreferrer">
                                    <h2>EDGEbin: Eco-Driven Garbage Evaluator</h2>
                                </a>
                                <a href="https://github.com/omer-18/EDGEbin" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity flex-shrink-0">
                                    <img src="/images/github.png" alt="GitHub" className="w-7 h-7 md:w-10 md:h-10" />
                                </a>
                            </div>
                        </div>
                        <div className="project group" ref={project5Ref}>
                            <div className="image-wrapper bg-gradient-to-br from-slate-500/10 via-gray-500/10 to-zinc-500/10 !p-1 sm:!p-1.5">
                                <div className="relative w-full h-full">
                                    <img src="/images/Dataviz.png" alt="DataViz Studio" loading="lazy" className="object-contain" />
                                    <div className="project-overlay">
                                        <p className="project-description">
                                            An interactive drag-and-drop data visualization tool that automatically creates charts from your data by intelligently detecting field types and suggesting the best visualizations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                <h2>DataViz Studio</h2>
                                <a href="https://github.com/omer-18/datavisualization" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity flex-shrink-0">
                                    <img src="/images/github.png" alt="GitHub" className="w-7 h-7 md:w-10 md:h-10" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - Large Project */}
                    <div className="first-project-wrapper group" ref={project6Ref}>
                        <div className="image-wrapper">
                            <video 
                                ref={pidVideoRef}
                                src="/videos/PID_OMER_SAJID.mp4" 
                                loop 
                                muted 
                                playsInline
                                preload="auto"
                                onMouseEnter={(e) => {
                                    const video = e.currentTarget;
                                    if (video.readyState >= 2) {
                                        video.play().catch(() => {});
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    const video = e.currentTarget;
                                    video.pause();
                                    video.currentTime = 0;
                                }}
                            />
                        </div>
                        <div className="text-content">
                            <h2>PID Controller: Auto-Balancer</h2>
                        </div>
                    </div>
                </div>

                {/* THIRD SECTION - TradeGuard and More Projects */}
                <div className="showcaselayout mt-8 md:mt-12 xl:mt-16">
                    {/* LEFT - TradeGuard Project */}
                    <div className="first-project-wrapper group" ref={project7Ref}>
                        <div className="image-wrapper">
                            <video 
                                ref={tradeGuardVideoRef}
                                src="/videos/tradeguard-finish-website-video.mp4" 
                                loop 
                                muted 
                                playsInline
                                preload="auto"
                                onMouseEnter={(e) => {
                                    const video = e.currentTarget;
                                    if (video.readyState >= 2) {
                                        video.play().catch(() => {});
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    const video = e.currentTarget;
                                    video.pause();
                                    video.currentTime = 0;
                                }}
                            />
                        </div>
                        <div className="text-content">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                <a href="https://trade-guard-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <h2>TradeGuard: Detect Insider Trading</h2>
                                </a>
                                <a href="https://github.com/omer-18/TradeGuard" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity flex-shrink-0">
                                    <img src="/images/github.png" alt="GitHub" className="w-7 h-7 md:w-10 md:h-10" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - Two Projects Stacked */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project group" ref={project8Ref}>
                            <div className="image-wrapper bg-gradient-to-br from-slate-500/10 via-gray-500/10 to-zinc-500/10 !p-1 sm:!p-1.5">
                                <a href="https://www.youtube.com/watch?v=bLf8vFsxAJ0&t=6s" target="_blank" rel="noopener noreferrer" className="relative w-full h-full block">
                                    <img src="/images/wato.png" alt="Simulated Navigation Robot" loading="lazy" className="object-contain w-full h-full" />
                                    <div className="project-overlay">
                                        <p className="project-description">
                                            A ROS2 navigation system for differential-drive robots that uses path-planning algorithms and Pure Pursuit control to enable reliable autonomous navigation with precise trajectory tracking.
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                <h2>Simulated Navigation Robot</h2>
                                <a href="#" className="hover:opacity-70 transition-opacity flex-shrink-0 pointer-events-none opacity-50">
                                    <img src="/images/github.png" alt="GitHub" className="w-7 h-7 md:w-10 md:h-10" />
                                </a>
                            </div>
                        </div>
                        <div className="project group" ref={project9Ref}>
                            <div className="image-wrapper bg-gradient-to-br from-slate-500/10 via-gray-500/10 to-zinc-500/10 !p-1 sm:!p-1.5">
                                <div className="relative w-full h-full">
                                    <img src="/images/project2.png" alt="Amazon Interface" loading="lazy" className="object-contain" />
                                    <div className="project-overlay">
                                        <p className="project-description">
                                            A responsive Amazon-style e-commerce interface clone with a functional shopping cart system, built using vanilla JavaScript and CSS Grid for seamless desktop and mobile experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                <h2>Amazon Interface Replica</h2>
                                <a href="https://github.com/omer-18/Amazon-Interface-Clone" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity flex-shrink-0">
                                    <img src="/images/github.png" alt="GitHub" className="w-7 h-7 md:w-10 md:h-10" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
