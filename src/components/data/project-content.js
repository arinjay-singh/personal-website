// title, description, image, github link, skills
import Image from "next/image";

const projectContent = [
  {
    title: "Personal Website",
    description:
      "This is my personal website that I built using React, Next.js, and Tailwind CSS. It documents my experience, projects, and research as I continue to grow as a software engineer.",
    github: "https://github.com/arinjay-singh/personal-website",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Git",
    ],
    image: (
      <Image
        src={`/images/projects/software-engineer.jpeg`}
        alt="Software Engineer"
        width={455}
        height={400}
        className=" h-[35rem]"
      />
    ),
  },
  {
    title: "Cyberbullying Sentiment Analysis",
    description:
      "Bi-directional LSTM model developed to classify tweets as cyberbullying or non-cyberbullying utilizing Natural Language Processing techniques.",
    github: "https://github.com/arinjay-singh/CyberbullyingSentimentAnalysis",
    skills: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "NLTK",
      "TensorFlow",
      "Keras",
      "Git",
    ],
    image: (
      <Image
        src={`/images/projects/cyberbullying.jpeg`}
        alt="Cyberbullying"
        width={445}
        height={400}
        className=" h-[35rem]"
      />
    ),
  },
  {
    title: "Information Retrieval Ranking Functions",
    description:
      "Implemented various ranking functions for information retrieval systems such as Okapi TF, TF IDF, Okapi BM 25, and Laplace Language Model. The functions were used to score documents in an inverted index and rank them based on the query terms.",
    github: "https://github.com/S24-InformationRetrieval/hw2-arinjay-singh",
    skills: ["Python", "NLTK", "Elasticsearch", "Kibana", "Git"],
    image: (
      <Image
        src={`/images/projects/information-retrieval.png`}
        alt="Information Retrieval"
        width={343}
        height={400}
        className=" h-[35rem]"
      />
    ),
  },
  {
    title: "Northeastern Healthy Dining",
    description:
      "Trained a Random Forest Regressor model to predict the healthiness of dining hall meals based on their nutritional content, utilizing Nutri-Score (WHO-recommended nutritional rating system) to determine the healthiness of the ingredients.",
    github: "https://github.com/arinjay-singh/NEU-Healthy-Dining",
    skills: ["Python", "Scikit-Learn", "Matplotlib", "Pandas", "NumPy"],
    image: (
      <Image
        src={`/images/projects/healthy-dining.jpeg`}
        alt="Northeastern Healthy Dining"
        width={375}
        height={400}
        className=" h-[35rem]"
      />
    ),
  },
  {
    title: "Secure Password Generator",
    description:
      "Developed a secure password generator based on the XKCD method. The XKCD method is a password generation method that originates from a webcomic claiming that people use passwords that are hard for humans to remember, but easy for computers to guess.",
    github: "https://github.com/arinjay-singh/Secure-Password-Generator",
    skills: ["Python", "Git"],
    image: (
      <Image
        src={`/images/projects/xkcd.png`}
        alt="XKCD Password Generator Comic"
        width={500}
        height={400}
        className=" h-[35rem]"
      />
    ),
  },
  {
    title: "Sodoku Solver",
    description:
      "Developed a backtracking algorithm to solve Sodoku puzzles. One implementation simply solves the puzzle, while the other implementation allows the user to play the game themselves and view the solution if needed.",
    github: "https://github.com/arinjay-singh/Sudoku-Solver",
    skills: ["Python", "Git"],
    image: (
      <div className="h-[35rem]">
        <Image
          src={`/images/projects/sudoku-unsolved.png`}
          alt="Sodoku Unsolved"
          width={963}
          height={400}
          
        />
        <Image
          src={`/images/projects/sudoku-solved.png`}
          alt="Sudoku Solved"
          width={400}
          height={400}
        />
      </div>
    ),
  },
  {
    title: "Pong",
    description:
      "Personal interpretation of the classic computer game Pong. The game was developed using Python and the Turtle graphics library.",
    github: "https://github.com/arinjay-singh/Pong",
    skills: ["Python", "Git"],
    image: (
      <Image
        src={`/images/projects/pong.jpeg`}
        alt="Pong"
        width={341}
        height={400}
      />
    ),
  },
];

export default projectContent;
