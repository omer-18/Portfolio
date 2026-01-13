import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "../constants";
gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
    const counterRef = useRef(null);
    const countersRef = useRef([]);

    useGSAP(() => {
        countersRef.current.forEach((el, index) => {
            const numberElement = el.querySelector(".counter-number");
            const item = counterItems[index];

            if (item.value !== undefined) {
                gsap.set(numberElement, { innerText: 0 });

                gsap.to(numberElement, {
                    innerText: item.value,
                    duration: 2.5,
                    ease: "power2.out",
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: "#counter",
                        start: "top bottom",
                    },
                    onUpdate: function () {
                        numberElement.textContent = `${Math.floor(this.targets()[0].innerText)}${item.suffix}`;
                    },
                });
            } else {
                numberElement.textContent = item.suffix;
            }
        });
    }, []);

    return (
        <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-2-cols">
                {counterItems.map((item, index) => {
                    const cardContent = (
                        <div
                            ref={(el) => el && (countersRef.current[index] = el)}
                            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
                        >
                            <div className="counter-number text-white text-5xl font-bold mb-2">
                                {item.value !== undefined ? `0${item.suffix}` : item.suffix}
                            </div>
                            <div className="text-white-50 text-lg">{item.label}</div>
                        </div>
                    );

                    return item.link ? (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            {cardContent}
                        </a>
                    ) : (
                        <div key={index}>{cardContent}</div>
                    );
                })}
            </div>
        </div>
    );
};

export default AnimatedCounter;
