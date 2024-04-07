import Section from "../subcomponents/section";
import languages from "../data/skills-languages";
import webDevFrameworks from "../data/skills-web-dev";
import dataTools from "../data/skills-data-tools";
import SkillCategory from "../subcomponents/skill-category";

export default function Skills() {
  return (
    <Section section_id="skills">
      <h1 className=" text-5xl font-bold text-slate-600 pt-8">Technical Skills</h1>
      <SkillCategory category="Programming Languages" skills={languages} />
      <SkillCategory category="Web Development" skills={webDevFrameworks} />
      <SkillCategory category="AI/ML/Data Tools" skills={dataTools} />
    </Section>
  );
}
