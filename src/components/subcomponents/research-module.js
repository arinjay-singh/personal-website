import { useState } from "react";
import Image from "next/image";

export default function ResearchModule({ research }) {
  const [peerHover, setPeerHover] = useState(false);

  const handlePeerHover = () => {
    setPeerHover(true);
  };

  const handlePeerUnhover = () => {
    setPeerHover(false);
  };

  return (
    <div className="flex flex-row-reverse space-x-5 space-x-reverse mt-8 w-full justify-between">
      <div
        className=" h-[35rem] w-[23rem] hover:w-[62rem] rounded-lg ring-1 ring-slate-200 shadow-xl hover:shadow-2xl hover:scale-[1.01]  ease-in-out duration-300 peer bg-gray-100 text-slate-600 overflow-hidden"
        onMouseEnter={handlePeerHover}
        onMouseLeave={handlePeerUnhover}
      >
        <div className=" relative flex flex-row-reverse items-start">
          <Image
            src={`images/research/grandparents.webp`}
            alt="Grandparents and Grandchildren"
            width={350}
            height={400}
            className={` flex-shrink-0 opacity-100 ${
              !peerHover && `opacity-60`
            }`}
          />
          <div
            className={`flex flex-col py-8 items-center ${
              peerHover && `px-5 w-[60%]`
            }`}
          >
            <h1
              className={`text-2xl font-sans font-semibold text-slate-600 ${
                !peerHover && `hidden`
              }`}
            >
              Economics
            </h1>
            <p
              className={` text-lg font-sans font-thin text-slate-600 ${
                !peerHover && `hidden`
              }`}
            >
              Research Assistant to Professor Xiaolin Shi
            </p>
            <p className="py-5 px-8 indent-5">
              As a research assistant under Professor Xiaolin Shi, I explored
              the various health implications of grandparents co-residing with
              their grandchildren utilizing self-rated health. More
              specifically, I utilized the field of econometrics, applying
              Difference-in-Difference Estimation and Regression Discontinuity
              Design on 4,000+ grandparent-grandchild pairs pulled from the
              Panel Study of Income Dynamics (PSID) conducted by the Survey
              Research Center at the University of Michigan.
            </p>
          </div>
        </div>
      </div>
      <div className=" h-[35rem] w-[62rem] rounded-lg ring-1 ring-slate-200 shadow-xl hover:shadow-2xl hover:scale-[1.01]  ease-in-out duration-300 peer-hover:w-[23rem] bg-gray-100 text-slate-600 overflow-hidden ">
        <div className=" relative flex flex-row items-start">
          <Image
            src={`images/research/migrant-misinformation.webp`}
            alt="Natural Language Processing"
            width={350}
            height={400}
            className={` flex-shrink-0 ${peerHover && `opacity-60`} `}
          />
          <div
            className={` flex flex-col py-8 items-center ${
              !peerHover && `px-5 w-[60%]`
            }`}
          >
            <h1
              className={` text-2xl font-sans font-semibold text-slate-600 ${
                peerHover && `hidden`
              }`}
            >
              Natural Language Processing
            </h1>
            <p
              className={` text-lg font-sans font-thin text-slate-600 block ${
                peerHover && `hidden`
              }`}
            >
              Research Assistant to Professor Mai ElSherief
            </p>
            <div className="py-5 px-8 space-y-5">
              <p className=" indent-5">
                As a research assistant under Professor Mai ElSherief, I am
                working to utilize the field of Natural Language Processing
                (NLP) to identify migrant misinformation patterns on social
                media in the U.S. and EU. This research is funded by the Google
                Trust and Safety Research Award and aims to create positive
                societal impact with technology.
              </p>
              <p className=" indent-5">
                Additionally, as part of a secondary project I am developing a
                framework based on the principles of Data Feminism for
                evaluating the ethical use of data in current NLP systems. This
                framework will be used to evaluate the ethical implications of
                the data used in the research and the potential biases that may
                arise from it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
