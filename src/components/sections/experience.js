import Section from "../subcomponents/section";
import ExperienceTrimodule from "../subcomponents/experience-trimodule";
import experienceContent from "../data/experience-content";

export default function Experience() {
  return (
    <Section section_id="experience" className={"pt-16"}>
      <h1 className=" text-5xl font-bold text-cyan-600 pt-8">Experience</h1>
      <ExperienceTrimodule />
    </Section>
  );
}
