import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/Models/contact/ContactExperience";

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loading state

        try {
            setError("");
            setSuccess(false);
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );

            // Reset form and show success
            setForm({ name: "", email: "", message: "" });
            setSuccess(true);
            setTimeout(() => setSuccess(false), 5000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setError("Failed to send message. Please try again or contact me directly.");
            setTimeout(() => setError(""), 5000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Get in Touch – Let's Connect"
                />
                <div className="grid-12-cols mt-16">
                    {/* Contact Form - Left Column */}
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-5 md:p-10">
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col gap-7"
                            >
                                <div>
                                    <label htmlFor="name">Your name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="What’s your name?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="What’s your email address?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="How can I help you? Feel free to just say hi :) Or challenge me in a rocket league duel. Lets connect!"
                                        rows="5"
                                        required
                                    />
                                </div>

                                {(success || error) && (
                                    <div className={`p-4 rounded-md ${success ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                        {success ? "✓ Message sent successfully!" : error}
                                    </div>
                                )}

                                <button type="submit" disabled={loading}>
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text">
                                            {loading ? "Sending..." : "Send Message"}
                                        </p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arrow" />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* 3D Experience - Right Column */}
                    <div className="xl:col-span-7 min-h-64 md:min-h-96">
                        <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;