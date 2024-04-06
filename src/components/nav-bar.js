import Link from "next/link";
import navElements from "./data/nav-elements";

export default function NavBar() {
  return (
    <nav className="fixed w-full top-0 bg-gray-100 z-10">
      <div className="max-w-full grid grid-flow-col p-6">
        <div className="flex items-center space-x-3 px-3">
          <Link href="#introduction">
            <h1 className="font-medium text-xl font-sans">Arinjay Singh</h1>
          </Link>
        </div>
        <div className="flex justify-end">
          <ul className="flex flex-row">
            {navElements.map((item) => (
              <li className={item.parent_styling} key={item}>
                {item.element}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
