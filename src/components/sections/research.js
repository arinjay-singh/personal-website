import ResearchModule from "../subcomponents/research-module";
import Section from "../subcomponents/section";

export default function Research() {
  return (
    <Section section_id="research" className={"pt-24"}>
      <h1 className=" text-5xl font-bold text-slate-600 pt-8">Research</h1>
      <div className="flex flex-row space-x-5 mt-8">
        <ResearchModule></ResearchModule>
        <ResearchModule></ResearchModule>
      </div>
    </Section>
  );
}
