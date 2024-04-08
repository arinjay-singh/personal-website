import Image from "next/image";

export default function SkillCategory({ category, skills }) {
  return (
    <div className=" my-7">
      <h2 className="text-lg text-center text-slate-600 mb-4">{category}</h2>
      <ul className="flex flex-row space-x-6">
        {skills.map((skill, index) => (
          <li key={index} className="flex flex-col text-center">
            <Image
              src={skill.svg}
              alt={skill.name}
              width={100}
              height={100}
              className=" h-20 w-20 hover:scale-125 transition duration-300 ease-out rounded-lg"            
            />
            <h2 className="text-normal text-slate-600 hidden">{skill.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
