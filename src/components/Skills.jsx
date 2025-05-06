import SkillFormate from "./SkillFormate";
import SkillData from "../data/skillsData";
import BackandFormate from "./BackandFormate";
import BackandData from "../data/backandData";
import frontenData  from "../data/frontendData";
import SkillGrid from "./SkillGrid";

function Skills({id}) {
 
  return (
    <div id={id??'box'} className="min-h-screen py-10 px-4 bg-black">
      <section className='flex flex-wrap gap-4 border border-gray-800 rounded-xl p-2  pb-8 mt-10 justify-center'>
        <h1 className='w-full text-white text-4xl font-bold text-center'>Skills</h1>
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
    </div>
  );
}

export default Skills;
