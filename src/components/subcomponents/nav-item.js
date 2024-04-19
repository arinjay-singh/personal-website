import Link from "next/link";

export default function NavItem({ title }) {
  return (
    <Link
      href={`/#${title.toLowerCase().replace(" ", "-")}`}
      className="font-medium font-sans text-slate-600 hover:text-cyan-600 transition ease-in-out duration-300"
    >
      {title}
    </Link>
  );
}
