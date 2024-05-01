import NavItem from "../subcomponents/nav-item";
import GithubLogo from "../subcomponents/github-logo";
import LinkedinLogo from "../subcomponents/linkedin-logo";
import Link from "next/link";
import Button from "../subcomponents/button";

const navElements = [
  {
    element: <NavItem title="Experience" />,
    parent_styling: "px-3 py-2",
  },
  {
    element: <NavItem title="Research" />,
    parent_styling: "px-3 py-2",
  },
  {
    element: <NavItem title="Projects" />,
    parent_styling: "px-3 py-2",
  },
  {
    element: <NavItem title="Skills" />,
    parent_styling: "px-3 py-2",
  },
  {
    element: <span className="font-thin"> | </span>,
    parent_styling: "px-2 py-2",
  },
  {
    element: <GithubLogo link="https://github.com/arinjay-singh" />,
    parent_styling: "px-2 py-2",
  },
  {
    element: <LinkedinLogo />,
    parent_styling: "px-2 py-2",
  },
  {
    element: <span className="font-thin"> | </span>,
    parent_styling: "px-2 py-2",
  },
  {
    element: (
      <Link href="https://drive.google.com/file/d/1LXM8Fg02Xo_KWhBptqBc1qMMr3E0fezT/view?usp=sharing" target="_blank">
        <Button label="Resume" />
      </Link>
    ),
    parent_styling: "px-3",
  },
];

export default navElements;
