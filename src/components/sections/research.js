import researchContent from "../data/research-content";
import ResearchModule from "../subcomponents/research-module";
import Section from "../subcomponents/section";

export default function Research() {
  return (
    <Section section_id="research" className={"pt-24"}>
      <h1 className=" text-5xl font-bold text-cyan-700 pt-8">Research</h1>
      <ResearchModule research={researchContent} />
    </Section>
  );
}
