import ExperienceModule from "./experience-module";

export default function ExperienceTrimodule() {
  return (
    <div className=" flex flex-reverse-wrap flex-wrap gap-5 w-full mt-8">
      <ExperienceModule>
        <div className=" flex flex-col items-center py-8 overflow-hidden px-16 mt-20 group-hover:mt-0 duration-300">
          <h1 className=" text-2xl font-sans font-semibold">
            {" "}
            Data Analyst Internship{" "}
          </h1>
          <p className=" text-sm font-sans font-extralight">
            Neocortex, Fremont, CA
          </p>
          <p className=" text-sm font-sans font-extralight">
            July 2023 - August 2023
          </p>
          <ul className=" list-disc py-8 space-y-5 hidden group-hover:block">
            <li>
              Identified actionable insights for clients through advanced
              analytics on time series cross-sectional dataset of 45 million
              data points
            </li>
            <li>
              Conducted exploratory data analysis and preprocessed data for
              Logistic Regression, Random Forest Classifier, and LSTM models
            </li>
            <li>
              Investigated machine learning models’ interpretability (feature
              importance/decision tree) and performance (classification metrics)
            </li>
          </ul>
        </div>
      </ExperienceModule>
      <div className="flex flex-row gap-5 w-full">
        <ExperienceModule>
          <div className=" flex flex-col items-center py-8 overflow-hidden px-16 mt-20 group-hover:mt-0 duration-300">
            <h1 className=" text-xl font-sans font-semibold">
              {" "}
              Full-Stack Software Developer{" "}
            </h1>
            <p className=" text-sm font-sans font-extralight">
              Northeastern Electric Racing, Boston, MA
            </p>
            <p className=" text-sm font-sans font-extralight">
              September 2023 - Present
            </p>
            <ul className=" list-disc py-5 space-y-5 hidden group-hover:block">
              <li>
                Developing frontend and backend features to enhance user interface
                and user experience of project management dashboard{" "}
              </li>
              <li>
                Collaborating with team of developers by utilizing GitHub Issues
                and Pull Requests to merge development branches
              </li>
            </ul>
          </div>
        </ExperienceModule>
        <ExperienceModule>
          <div className=" flex flex-col items-center py-8 overflow-hidden px-16 mt-20 group-hover:mt-0 duration-300">
            <h1 className=" text-xl font-sans font-semibold">
              {" "}
              Food Rescue & Recovery Volunteer{" "}
            </h1>
            <p className=" text-sm font-sans font-extralight">
              White Pony Express, Pleasant Hill, CA
            </p>
            <p className=" text-sm font-sans font-extralight">
              August 2020 - August 2022
            </p>
            <ul className=" list-disc py-5 space-y-5 hidden group-hover:block">
              <li>
                Sorted and packaged rescued food for redistribution to local
                schools, community centers, and assisted living facilities
              </li>
              <li>
                Produced an outreach documentary in collaboration with the board
                of directors to increase volunteer participation
              </li>
            </ul>
          </div>
        </ExperienceModule>
      </div>
    </div>
  );
}
