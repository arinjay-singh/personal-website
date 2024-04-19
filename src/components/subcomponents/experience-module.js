export default function ExperienceModule({ children }) {
  return (
    <div className=" h-[20rem] w-full rounded-lg ring-1 ring-slate-200 shadow-xl hover:shadow-2xl transition ease-out duration-500 group bg-gray-100 hover:bg-gray-100 text-black hover:text-slate-600 border-2 border-slate-200 hover:border-cyan-600">
      {children}
    </div>
  );
}
