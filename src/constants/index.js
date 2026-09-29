const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Interests",
    link: "#interests",
  },
  /*{
    name: "Testimonials",
    link: "#testimonials",
  },*/
];

const resumeLink = "https://drive.google.com/file/d/18dZLGUkfOntp_3CDXL2crDwdKqXpLUJd/view?usp=sharing";

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Robust Design",
    desc: " Integrating hardware, firmware, and software with precision to ensure reliable, error-free systems.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Intentional Workflow",
    desc: "Using clear, structured methods to make technical work easy to build, scale, and collaborate on.",
  },
  {
    imgPath: "/images/time.png",
    title: "Agile Execution",
    desc: "Building ideas into working systems through rapid, practical development.",
  },
];

// Placeholder models reusing existing .glb files until real ones are downloaded.
// To swap in real models: drop the .glb files into public/models/, then update
// modelPath (and scale/rotation if the model looks too big/small/rotated) below.
const personalInterests = [
  {
    name: "Listening",
    modelPath: "/models/sony_mdr-7506_headphones-transformed.glb",
    scale: 22,
    rotation: [0, 0, 0],
  },
  {
    name: "Watching",
    modelPath: "/models/tv__old_tv__retro_tv-transformed.glb",
    scale: 1.6,
    rotation: [0, -Math.PI / 2, 0],
    position: [0, -3.63, 0.75],
  },
  {
    name: "Reading",
    modelPath: "/models/book_stack-transformed.glb",
    scale: 2.5,
    rotation: [0, 0, 0],
  },
];

const showcaseProjects = [
  {
    id: "creation",
    title: "Creation: The Cursor for CAD",
    media: { type: "video", src: "/videos/tire-finish-finish-video.mp4" },
    titleLink: "https://creation.builders",
    liveLink: "https://creation.builders",
  },
  {
    id: "creation-text",
    title: "Creation: The Cursor for CAD",
    media: { type: "text" },
    description:
      "Creation is an AI-powered CAD agent that converts plain-language prompts into production-ready SolidWorks models in seconds, using a Python backend on AWS, a Claude API NLP pipeline, and a RAG pipeline over 1,000+ prior designs.",
  },
  {
    id: "pid",
    title: "PID Controller: Auto-Balancer",
    media: { type: "video", src: "/videos/PID_OMER_SAJID.mp4" },
  },
  {
    id: "tradeguard",
    title: "TradeGuard: Detect Insider Trading",
    media: { type: "video", src: "/videos/tradeguard-finish-website-video.mp4" },
    titleLink: "https://trade-guard-ten.vercel.app/",
    liveLink: "https://trade-guard-ten.vercel.app/",
    githubLink: "https://github.com/omer-18/TradeGuard",
  },
  {
    id: "perception",
    title: "Perception (HTN 2026)",
    media: { type: "video", src: "/videos/perception.mp4", poster: "/images/Perception.jpg" },
    titleLink: "https://devpost.com/software/perception-fha214",
    liveLink: "https://devpost.com/software/perception-fha214",
  },
  {
    id: "dataviz",
    title: "DataViz Studio",
    media: { type: "image", src: "/images/Dataviz.png", alt: "DataViz Studio" },
    description:
      "An interactive drag-and-drop data visualization tool that automatically creates charts from your data by intelligently detecting field types and suggesting the best visualizations.",
    githubLink: "https://github.com/omer-18/datavisualization",
  },
  {
    id: "toyota",
    title: "Toyota Innovation Challenge",
    media: {
      type: "image-pair",
      src: ["/images/toyota1.jpg", "/images/toyota2.jpg"],
      alt: ["Toyota Challenge 1", "Toyota Challenge 2"],
    },
    titleLink: "https://drive.google.com/file/d/1TUBsWQnf_FG1uMiiiPaejTno2OFhLpOd/view?usp=sharing",
    description:
      "An autonomous navigation system for factory robots that uses computer vision to recognize stop signs and LIDAR sensors to avoid obstacles, enabling safe automated transportation of vehicle parts.",
    githubLink: "https://github.com/jay-mango/Toyota_Challenge?tab=readme-ov-file",
  },
  {
    id: "ai-sign-language",
    title: "AI Sign Language to Speech Translator",
    media: {
      type: "image-pair",
      src: ["/images/clif1.jpg", "/images/clif2.jpg"],
      alt: ["CLIF Demo 1", "CLIF Demo 2"],
    },
    titleLink: "https://devpost.com/software/clif-cj1ql7",
    description:
      "A real-time sign language translator that converts ASL gestures into spoken text and speech using computer vision.",
    githubLink: "https://github.com/omer-18/CLIF",
  },
  {
    id: "edgebin",
    title: "EDGEbin: Eco-Driven Garbage Evaluator",
    media: { type: "image", src: "/images/edgebin2.png", alt: "EDGEbin" },
    titleLink: "https://devpost.com/software/edgebin",
    description:
      "A AI-driven garbage sorting machine that uses computer vision to automatically classify and sort waste into different categories with high accuracy.",
    githubLink: "https://github.com/omer-18/EDGEbin",
  },
  {
    id: "sim-robot",
    title: "Simulated Navigation Robot",
    media: { type: "image", src: "/images/wato.png", alt: "Simulated Navigation Robot" },
    titleLink: "https://www.youtube.com/watch?v=bLf8vFsxAJ0&t=6s",
    description:
      "A ROS2 navigation system for differential-drive robots that uses path-planning algorithms and Pure Pursuit control to enable reliable autonomous navigation with precise trajectory tracking.",
    githubDisabled: true,
  },
];

const featuredProjectIds = ["creation", "pid", "tradeguard", "perception"];

const expCards = [
  {
    logoPath: "/images/randoxlogo.png",
    company: "Randox Laboratories",
    role: "Software Engineering Intern",
    dateRange: "May 2026 – Aug 2026",
    location: "Belfast, UK",
    link: "https://www.randox.com/",
    teaser: "Built an Uber-style Heathcare Courier Platform used in 200+ clinics across the UK.",
    overview:
      "Joining Randox Laboratories to build a full-stack courier coordination platform for a national healthcare network — a React Native app paired with a high-throughput dispatch API.",
    bullets: [
      "Built an Uber-style React Native platform for a national healthcare network, coordinating 200+ couriers across the UK",
      "Developed a full-stack courier system with a Node.js/Express REST API handling 10,000+ daily requests alongside a 40+ screen React Native/TypeScript app",
      "Modeled a normalized Azure SQL Server schema with indexed queries, achieving sub-200ms query response times",
      "Designed a dispatch optimization algorithm auto-assigning jobs to the nearest driver by weighing GPS location, time-windows, and duty-time limits, cutting manual dispatch effort by 90%",
    ],
    techStack: ["React Native", "TypeScript", "Node.js", "Express.js", "Azure SQL"],
  },
  {
    logoPath: "/images/logo5.png",
    company: "Creation",
    role: "Founder",
    dateRange: "October 2025 – Present",
    location: "Toronto, ON, Canada",
    link: "https://creation.builders",
    teaser: "Cursor for CAD: AI-powered CAD agent turning prompts into production-ready CAD models.",
    overview:
      "Building an AI-powered CAD agent that turns plain-language prompts into production-ready SolidWorks models — from NLP interpretation through automated, manufacturable output.",
    bullets: [
      "Built a full-stack AI-powered SolidWorks CAD agent that converts prompts into production-ready CAD files in seconds using a Python backend on AWS; launched a waitlist of 300+ sign-ups",
      "Developed an NLP pipeline with the Claude API to interpret raw design prompts and produce manufacturable CAD models via the SolidWorks API, powering 100+ automated designs",
      "Implemented a RAG pipeline indexing 1,000+ PostgreSQL records to boost model accuracy, consistency, and response speed by retrieving prior successful outputs",
    ],
    techStack: ["Python", "AWS", "Claude API", "SolidWorks API", "PostgreSQL"],
  },
  {
    logoPath: "/images/logo4.png",
    company: "WDI Wise Device Inc.",
    role: "Embedded Software Engineering Intern",
    dateRange: "September 2025 – December 2025",
    location: "Toronto, ON, Canada",
    link: "https://wdidevice.com/",
    teaser: "Embedded Software Technology for Microscopes and Autofocus sensors.",
    overview:
      "Engineered a Python-based simulation platform for an embedded imaging pipeline, replacing hardware test benches with fast, repeatable software models.",
    bullets: [
      "Engineered a Python-based simulation platform with NumPy and modular design patterns, improving performance and reducing reliance on hardware testing by 85%",
      "Implemented Python models of FPGA image-processing stages to replicate hardware logic, replacing 9 of 10 tests",
      "Developed a C++ diagnostic automation tool with TCP/IP socket communication to execute scripts on embedded Linux hardware, reducing field debugging time by 75%",
    ],
    techStack: ["Python", "NumPy", "FPGA", "C++", "TCP/IP", "Embedded Linux"],
  },
  {
    logoPath: "/images/logo1.png",
    company: "ONIT Energy",
    role: "AI/ML Engineering Intern",
    dateRange: "January 2025 – April 2025",
    location: "Toronto, ON, Canada",
    link: "https://www.ontariowholesaleenergy.com/",
    teaser: "Creating an AI outbound calling system to automate customer outreach.",
    overview:
      "Developed an AI-driven outbound calling system to automate customer outreach, integrating speech recognition, intent classification, and speech synthesis into one real-time pipeline.",
    bullets: [
      "Developed an AI-driven outbound calling system integrating Whisper, BERT, DialoGPT, and Tacotron/WaveGlow into a real-time STT → NLP → TTS pipeline, cutting manual call handling from 500 calls/day to under 200",
      "Automated preprocessing for 3,000+ audio calls (transcription, MFCC extraction, diarization), reducing dataset preparation from 3 hours per batch to under 30 minutes and improving training throughput by 6×",
      "Fine-tuned BERT model for 3-class intent recognition, boosting dialogue accuracy by 25% on test prompts",
    ],
    techStack: ["Whisper", "BERT", "DialoGPT", "Tacotron/WaveGlow"],
  },
  {
    logoPath: "/images/logo2.png",
    company: "Jacobsen Xray",
    role: "Product Development Engineering Intern",
    dateRange: "June 2020 – December 2023",
    location: "Toronto, ON, Canada",
    link: "https://www.jacobsenxray.com/",
    teaser: "Researching Metallurgy Applications and working on Designing Patents in Solidworks",
    overview:
      "Supported product development for a scrubbing machine line, from CAD modeling through documentation used to onboard new operators.",
    bullets: [
      "Designed 3D CAD models of a scrubbing machine in SolidWorks and AutoCAD, cutting iteration time by 40%",
      "Helped develop a comprehensive machine operating manual, ensuring proper usage, reducing onboarding errors by 60%.",
    ],
    techStack: ["SolidWorks", "AutoCAD"],
  },
  {
    logoPath: "/images/logo3.png",
    company: "WARG",
    role: "Embedded Flight Software Project Manager",
    dateRange: "November 2023 – June 2025",
    location: "Waterloo, ON, Canada",
    link: "https://www.uwarg.com/",
    teaser: "Built a drone-tracking antenna pipeline with 95% tracking accuracy.",
    overview:
      "Led the embedded flight software team building a real-time tracking antenna system for autonomous drone telemetry.",
    bullets: [
      "Developed the end-to-end tracking antenna pipeline (drone telemetry → UDP → ADC/SPI → MCU PWM → motor actuation), delivering 95% tracking accuracy and reducing alignment error to 5° in real-time trials",
      "Programmed the STM32/ESP32 to process ADC input and generate PWM outputs, supporting variable-speed motor actuation and ensuring stable antenna dynamics across 100+ field tests",
    ],
    techStack: ["STM32", "ESP32", "UDP", "ADC/SPI", "PWM"],
  },
];

const socialImgs = [
  {
    name: "github",
    url: "https://github.com/omer-18",
    imgPath: "/images/github.png",
  },
  {
    name: "devpost",
    url: "https://devpost.com/omer-sjd05?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
    imgPath: "/images/devpost.png",
  },
  {
    name: "portfolio",
    url: "https://drive.google.com/file/d/1kR9ejQWANuT96UvTKy709nEe-KdzIn7u/view?usp=sharing",
    imgPath: "/images/portfolio.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/omer-sajid/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  resumeLink,
  abilities,
  logoIconsList,
  showcaseProjects,
  featuredProjectIds,
  expCards,
  socialImgs,
  personalInterests,
  navLinks,
};