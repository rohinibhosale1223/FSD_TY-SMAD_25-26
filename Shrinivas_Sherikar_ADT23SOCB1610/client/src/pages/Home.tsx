
import { Link } from 'react-router-dom';
import FeatureCarousel from '../components/FeatureCarousel';
import FAQ from '../components/FAQ';
import HeroImg from '/landing.png'

function Home() {
  return (
    <div className="text-white pt-16">
      
      
      <section className="relative z-10 pt-14 mt-14 flex flex-col justify-center items-center gap-5 container mx-auto px-4">
        <div className="text-2xl sm:text-4xl md:text-5xl font-bold px-1 text-center mt-10 md:mt-0">
          <p>Unleash Your Ideas, Together.</p>
          <p>
            <span className="text-primary-custom">DrawKit</span> is Your Smart Investment
          </p>
        </div>

        <div className="text-center max-w-xl text-gray-400 text-sm md:text-base">
          <p>
            DrawKit is a real-time collaborative whiteboard for brainstorming, 
            wireframing, and bringing your team's vision to life. Effortlessly.
          </p>
        </div>

        <div className="space-y-1 flex flex-col">
          <Link 
            to="/register" 
            className="bg-primary-custom text-black py-2 md:py-3 px-2 md:px-5 rounded-md hover:bg-opacity-90 transition-colors md:text-base text-sm font-medium"
          >
            Start Drawing Now
          </Link>
          <p className="text-[0.7rem] text-gray-400 text-center">
            No credit card required
          </p>
        </div>

        <div className="max-w-6xl mt-5">
          <img
            src={HeroImg}
            alt="DrawKit App"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </section>

      <section className="relative z-10 flex flex-col justify-center items-center pt-24 gap-5 container mx-auto px-4">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-custom/10 text-primary-custom text-sm font-medium">
          <span>Features</span>
        </div>
        <div className="text-3xl md:text-4xl text-center font-semibold">
          <p>
            Why teams{" "}
            <span className="text-primary-custom bg-primary-custom/10 px-2">
              love
            </span>{" "}
            DrawKit
          </p>
        </div>
        <div className="max-w-xl md:max-w-md text-gray-400 text-center text-sm md:text-base">
          <p>
            DrawKit offers comprehensive tools, combining real-time collaboration 
            with powerful analytics to keep your team's ideas flowing.
          </p>
        </div>
        <FeatureCarousel />
      </section>

      
      <section className="relative z-10 flex flex-col lg:flex-row justify-center items-center pt-24 pb-20 gap-5 container mx-auto px-4">
        <FAQ />
      </section>
    </div>
  )
}

export default Home;