import React, {useEffect, useState} from 'react'
import {navLinks, resumeLink} from "../constants/index.js";

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // create an event listener for when the user scrolls
        const handleScroll = () => {
            // check if the user has scrolled down at least 10px
            // if so, set the state to true
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };
    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    Omer Sajid
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name}) =>
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"/>
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>

                <div className="flex items-center gap-3 md:gap-5">
                    <a href="#contact" aria-label="Contact me" className="mail-icon-btn">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6.5L12 13L21 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                        </svg>
                    </a>

                    <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="contact-btn group">
                        <div className="inner">
                            <span>Resume</span>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}
export default NavBar
