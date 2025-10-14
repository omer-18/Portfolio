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
    name: "Skills",
    link: "#skills",
  },
  /*{
    name: "Testimonials",
    link: "#testimonials",
  },*/
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "nd Year", label: "student at University of Waterloo" },
  { suffix: "My Resume", label: "Please click :)", link:"https://drive.google.com/file/d/1mEPkvjean7oUlc5_laEJK566CkU431GP/view?usp=sharing" },
  {value: 24, suffix: "+", label: "Months of Experience" }
  /* { value: 0, suffix: "+", label: "Huzz" }, */
];

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

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "C/C++/C# Developer",
    modelPath: "/models/c.glb",
    scale: 0.08,
    rotation: [0, 0, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
"Omer approached his work with initiative and strong problem-solving instincts, helping shape an AI automation system from the ground up. His ability to work independently and adapt to challenges made a clear impact on the project’s early progress.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "AI/ML Developer Intern - ONIT Energy",
    date: "January 2025 - April 2025 | Toronto, ON, Canada",
    responsibilities: [
      "Independently planned and developed a long-term AI outbound calling project, integrating Whisper, BERT, DialoGPT, Tacotron 2, and WaveGlow into a real-time STT → NLP → TTS pipeline",
      "Processed 3,000+ calls by automating transcription, MFCC extraction, and diarization to support model training.",
      "Fine-tuned BERT model for 3-class intent recognition, boosting dialogue accuracy by 25% on test prompts.",
    ],
  },
  {
    review:
    "Omer’s engineering design work brought structure and clarity to our product development process. His CAD modeling and documentation reduced iteration cycles and streamlined onboarding",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Product Development Engineering Intern - Jacobsen Xray",
    date: "June 2020 - December 2023 | Toronto, ON, Canada",
    responsibilities: [
      "Designed 3D CAD model of custom metal scrubbing machine in SolidWorks, cutting design iteration time by 40%.",
      "Helped develop a comprehensive machine operating manual, ensuring proper usage, reducing onboarding errors by 60%",
      "Conducted in-depth research on metallurgy applications, contributing to the design of a patented product",
    ],
  },
  {
    review:
    "Omer’s work on our embedded flight systems played a key role in enabling real-time drone tracking. His deep understanding of hardware-software integration significantly improved our system’s responsiveness and control accuracy",    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Embedded Flight Software Project Manager - WARG",
    date: "November 2023 - Present | Waterloo, ON, Canada",
    responsibilities: [
      "Used MAVLink to receive data from a Drone Mission Planner and transmit to a Seeeduino over a WiFi network, enabling real-time movement of the Tracking Antenna’s yaw and pitch, with 95% drone tracking accuracy.",
      "Utilized ADC for voltage-to-digital signal conversion and used SPI communication to transmit ADC values to MCU",
      "Programmed MCU to interpret data and generate PWM signals for variable motor speeds on STM32 Nucleo.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
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
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};