// title, description, image, github link, skills
import Image from "next/image";

const projectContent = [
  {
    title: "Cyberbullying Sentiment Analysis",
    description:
      "In this project, I developed a Bi-directional Long Short-Term Memory (BiLSTM) model utilizing Word2Vec dense word embeddings to classify social media posts as cyberbullying or not cyberbullying. The model was trained on a joint sentiment and cyberbullying dataset of 250,000 tweets, achieving a weighted F1-score of 0.81 and an accuracy of 81%. It's relative performance was further confirmed by comparing it to a Logistic Regression model and VADER, a leading sentiment analysis tool.",
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
        src={`images/projects/cyberbullying.webp`}
        alt="Cyberbullying"
        width={400}
        height={400}
        className=" h-[35rem]"
      />
    ),
  },
  {
    title: "Personal Website",
    description:
      "This is my personal website that I designed with Next.js, styled with Tailwind CSS, and deployed using GitHub Pages. It will serve as a place for me to document my experiences, projects, and skills as I continue to grow as a software engineer.",
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
        src={`images/projects/software-engineer.webp`}
        alt="Software Engineer"
        width={400}
        height={400}
        className=" h-[35rem]"
      />
    ),
  },
  {
    title: "Information Retrieval Functions",
    description:
      "In this project, I implemented various document ranking functions for information retrieval systems such as Okapi TF, TF IDF, Okapi BM 25, and Laplace Language Model. The functions utilized an inverted index of a corpus to rank documents based on their relevance to a given query.",
    github: "https://github.com/S24-InformationRetrieval/hw2-arinjay-singh",
    skills: ["Python", "NLTK", "Elasticsearch", "Kibana", "Git"],
    image: (
      <Image
        src={`images/projects/information-retrieval.webp`}
        alt="Information Retrieval"
        width={400}
        height={400}
        className=" h-[35rem]"
      />
    ),
  },
  {
    title: "Northeastern Healthy Dining",
    description:
      "In this project, I trained a Random Forest Regressor model to predict the healthiness of Northeastern dining hall meals based on their nutritional content, utilizing Nutri-Score (WHO-recommended nutritional rating system) to determine the healthiness of the ingredients.",
    github: "https://github.com/arinjay-singh/NEU-Healthy-Dining",
    skills: ["Python", "Scikit-Learn", "Matplotlib", "Pandas", "NumPy"],
    image: (
      <Image
        src={`images/projects/healthy-eating.webp`}
        alt="Northeastern Healthy Dining"
        width={400}
        height={400}
        className=" h-[35rem]"
      />
    ),
  },
  {
    title: "Secure Password Generator",
    description:
      "In this project, I developed a secure password generator based on the XKCD method. The XKCD method is a password generation method that originates from a webcomic claiming that people use passwords that are hard for humans to remember, but easy for computers to guess.",
    github: "https://github.com/arinjay-singh/Secure-Password-Generator",
    skills: ["Python", "Git"],
    image: (
      <Image
        src={`images/projects/password-generation.webp`}
        alt="XKCD Password Generator Comic"
        width={400}
        height={400}
        className=" h-[35rem]"
      />
    ),
  },
  {
    title: "Sodoku Solver",
    description:
      "In this project, I developed a backtracking algorithm to solve Sodoku puzzles. One implementation simply solves the puzzle, while the other implementation allows the user to play the game themselves and view the solution if needed.",
    github: "https://github.com/arinjay-singh/Sudoku-Solver",
    skills: ["Python", "Git"],
    image: (
      <Image
        src={`images/projects/sudoku.webp`}
        alt="Sudoku"
        width={400}
        height={400}
        className=" h-[35rem]"
      />
    ),
  },
  {
    title: "Pong",
    description:
      "This is my personal interpretation of Pong, a classic arcade game. It features a single-device two-player mode where players can compete against each other to see who can score the most points.",
    github: "https://github.com/arinjay-singh/Pong",
    skills: ["Python", "Git"],
    image: (
      <Image
        src={`images/projects/pong.webp`}
        alt="Pong"
        width={400}
        height={400}
        className=" h-[35rem]"
      />
    ),
  },
];

export default projectContent;
