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
        className=" h-[35rem] w-[25rem] hover:w-[60rem] rounded-lg ring-1 ring-slate-200 shadow-xl hover:shadow-2xl hover:scale-[1.01]  ease-in-out duration-300 peer bg-gray-100 text-slate-600 overflow-hidden"
        onMouseEnter={handlePeerHover}
        onMouseLeave={handlePeerUnhover}
      >
        <div className=" relative flex flex-row-reverse items-start">
          <Image
            src={`images/research/grandparents.webp`}
            alt="Grandparents and Grandchildren"
            width={400}
            height={400}
            className={` h-[35rem] flex-shrink-0 opacity-100 ${
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
            <ul className="list-disc py-5 px-8 space-y-5">
              <li>
                Explored the various health implications of grandparents
                co-residing with their grandchildren utilizing self-rated health
              </li>
              <li>
                Applied Difference-in-Difference Estimation and Regression
                Discontinuity Design on 4,000+ grandparent-grandchild pairs
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" h-[35rem] w-[60rem] rounded-lg ring-1 ring-slate-200 shadow-xl hover:shadow-2xl hover:scale-[1.01]  ease-in-out duration-300 peer-hover:w-[25rem] bg-gray-100 text-slate-600 overflow-hidden ">
        <div className=" relative flex flex-row items-start">
          <Image
            src={`images/research/migrant-misinformation.webp`}
            alt="Natural Language Processing"
            width={400}
            height={400}
            className={` h-[35rem] flex-shrink-0 ${peerHover && `opacity-60`} `}
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
            <ul className="list-disc py-5 px-8 space-y-5">
              <li>
                Google Trust and Safety Research Award to identify migrant
                misinformation patterns on social media in the U.S. and EU
              </li>
              <li>
                Develop a framework based on the principles of Data Feminism for
                evaluating the ethical use of data in current NLP systems
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
