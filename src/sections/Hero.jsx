import Button from '../components/Button.jsx';
import HeroExperience from '../components/HeroModels/HeroExperience.jsx';
import { useGSAP} from "@gsap/react";
import gsap from 'gsap';

const Hero = () => {
  useGSAP( () => {
    gsap.fromTo('.hero-intro p',
{
            y: 50,
            opacity: 0,
        },
  {
          y: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 1,
          ease: "power2.inOut"
        },
    )
  })



  return (
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
          <img src="/images/bg.png" alt="" />
        </div>

        <div className="hero-layout">
          {/* LEFT: Hero Content */}
          <header className="flex flex-col justify-center md:w-full w-screen md:px-25 px-5 xl:-mt-16 -mt-[22px]">
            <div className="flex flex-col gap-7">
              <div className="hero-intro">
                <p className="text-[12px] md:text-[20px] font-normal leading-relaxed max-w-[690px] relative z-10 pointer-events-none">
                  Hi! I’m Omer, a third year Mechatronics Engineering student at the University of Waterloo. I'm passionate about all things software, robotics and AI :)
                </p>
              </div>

              <Button
                  text="See My Work"
                  className="md:w-72 md:h-14 w-52 h-11"
                  id="work"
              />
            </div>
          </header>
        {/*RIGHT: 3D MODEL*/}
        <figure>
          <div className = "hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  )
}
export default Hero;
