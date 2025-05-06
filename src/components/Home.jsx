import image1 from '../assets/img/image1.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { NavLink } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileLinks from './ProfileLinks';
import SocialIcons from './SocialIcons';
import StatsSection from './StateSection';
import SkillGrid from './SkillGrid';
import Projects from './Projects';
import { titleAnimation, scrollAnimation, scrollAbout } from '../animation/HomeAnime';

function Home() {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      titleAnimation();
      scrollAnimation();
      scrollAbout();
    });

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return (
    <div className="bg-black text-white px-4 md:px-12 lg:px-20 font-sans">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center pt-28 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 mt-10">
          
          {/* Left: Intro + CV Link */}
          <div className="max-w-lg text-center flex flex-col justify-center md:text-left  space-y-4">
            <ProfileHeader />
            <div className="mt-6 mx-auto">
              <NavLink
                to="/cv"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
              >
                Show CV
              </NavLink>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="w-full md:w-1/2 max-w-sm">
            <img
              src={image1}
              alt="Jay Kumar"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>


      {/* Profile Links, Social Icons, Stats */}
      <section id="profile" className="py-16 justify-center border-t flex-wrap border-gray-700 flex  gap-10">
        <StatsSection />
        <ProfileLinks />
        <SocialIcons />
      </section>
      <section className='flex flex-wrap gap-4 pb-8  justify-center'>
        <h1 className='w-full text-2xl font-bold text-center'>Skills</h1>
        <SkillGrid name={"javascript"} percent={85}/>
        <SkillGrid name="express" percent={90}/>
        <SkillGrid name="postgresql" percent={80}/>
        <SkillGrid name="react" percent={90}/>
        <SkillGrid name="mongodb" percent={70}/>
        <SkillGrid name="typescript" percent={70}/>
        <SkillGrid name="nextjs" percent={70}/>
        <SkillGrid name={"java"} percent={80}/>
        <SkillGrid name="cpp" percent={70}/>
        <SkillGrid name="mysql" percent={90}/>
        <SkillGrid name="springboot" percent={40}/>
        <SkillGrid name={"python"} percent={30}/>
        <SkillGrid name={"docker"} percent={30}/>
      </section>
      <section className='mb-10'>
        <Projects/>
      </section>    
    </div>
  );
}

export default Home;
