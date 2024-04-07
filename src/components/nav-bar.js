import Link from "next/link";
import navElements from "./data/nav-elements";
import signature from "./images/signature2.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="fixed w-full top-0 bg-gray-100 z-10">
      <div className="max-w-full grid grid-flow-col pt-4 px-6">
        <div className="flex items-center space-x-3 ">
          <Link href="#introduction">
            <Image priority src={signature} width={240} height={100} alt="Memoji" className="h-16 object-cover"/>
          </Link>
        </div>
        <div className="flex items-center justify-end">
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