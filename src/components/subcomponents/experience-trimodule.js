import ExperienceModule from "./experience-module";

export default function ExperienceTrimodule({ experiences }) {
  return (
    <div className=" flex flex-reverse-wrap flex-wrap gap-5 w-full mt-8">
      <ExperienceModule />
      <div className="flex flex-row gap-5 w-full">
        <ExperienceModule />
        <ExperienceModule />
      </div>
    </div>
  );
}
