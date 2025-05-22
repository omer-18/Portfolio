import Hero from './sections/Hero.jsx'
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoShowcase from "./sections/LogoShowcase.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <ShowcaseSection />
      {/* Not including this because don't have enough companies worked with, and its hard to find logos to use
      <LogoShowcase />*/}
      <FeatureCards/>
      <ExperienceSection/>
      <TechStack/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;