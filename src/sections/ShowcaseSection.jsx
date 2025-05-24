import React, {useRef} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP( () => {
        const projects = [project1Ref.current, project2Ref.current,
            project3Ref.current];
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
                    <div className="first-project-wrapper" ref = {project1Ref}>
                        <div className="image-wrapper">
                            <a href= "https://devpost.com/software/clif-cj1ql7" target = "_blank">
                                <img src="/images/project1.png" alt="CLIF" />
                            </a>
                        </div>
                        <div className="text-content">
                            <a href= "https://github.com/omer-18/CLIF" target = "_blank">
                                <h2>CLIF: Man's next best friend.
                                    A device that translates sign language to speech in real time.</h2>
                            </a>
                            <p className="text-white-50 md:text-xl">
                                Built with Arduino, TensorFlow, Pytorch, OpenCV and Python
                                for a fast, user friendly experience.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref = {project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <a href = "https://github.com/omer-18/Amazon-Interface-Clone" target = "_blank">
                                    <img src="/images/project2.png" alt="Amazon Interface" />
                                </a>
                            </div>
                                <a href = "https://github.com/omer-18/Amazon-Interface-Clone" target = "_blank">
                                    <h2> Amazon Interface Clone </h2>
                                </a>
                        </div>
                        <div className="project" ref = {project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <a href= "https://drive.google.com/file/d/1WSquqE1vtUMirYIr2BXfIZAak8J8n7VU/view" target = "_blank">
                                    <img src="/images/project3.png" alt="PID" />
                                </a>
                            </div>
                            <a href= "https://github.com/omer-18/PID-Controller" target = "_blank">
                                <h2> PID Controller: Auto-Balancer </h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
