"use client";

import Link from "next/link";
import navElements from "./data/nav-elements";
import signature from "./images/signature-black.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavBar() {

  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollHeight]);

  useEffect(() => {
    setScrollHeight(window.scrollY);
  }, [])


  return (
    <nav className={(scrollHeight > 25)? "fixed w-full top-0 bg-gray-100 z-10 border-b-2 border-gray-200 ease-in-out duration-150": "fixed w-full top-0 bg-gray-100 z-10 border-b-2 border-gray-100 ease-in-out duration-150"}>
      <div className="max-w-full grid grid-flow-col pt-2 pb-1 px-6">
        <div className="flex items-center space-x-3 ">
          <Link href="#introduction">
            <Image priority src={signature} width={240} height={100} alt="Memoji" className="h-16 object-cover"/>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <ul className="flex flex-row">
            {navElements.map((item, index) => (
              <li className={item.parent_styling} key={index}>
                {item.element}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}