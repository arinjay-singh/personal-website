import Section from "../subcomponents/section";
import ExperienceModule from "../subcomponents/experience-module";

export default function Experience() {
  return (
    <Section section_id="experience" className={"pt-16"}>
      <h1 className=" text-5xl font-bold text-slate-600 pt-8">Experience</h1>
      <div className=" flex flex-reverse-wrap flex-wrap gap-5 w-full mt-8">
        <ExperienceModule />
        <div className="flex flex-row gap-5 w-full">
          <ExperienceModule />
          <ExperienceModule />
        </div>
      </div>
    </Section>
  );
}
