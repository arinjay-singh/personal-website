export default function ResearchModule() {
  return (
    <div className="flex flex-row-reverse space-x-5 space-x-reverse mt-8">
      <div className=" h-[35rem] w-[25rem] hover:w-[60rem] rounded-lg ring-1 ring-slate-200 shadow-xl hover:shadow-2xl hover:scale-[1.01] ease-in-out duration-500 peer bg-gray-100 "></div>
      <div className=" h-[35rem] w-[60rem] rounded-lg ring-1 ring-slate-200 shadow-xl hover:shadow-2xl hover:scale-[1.01] ease-in-out duration-500 peer-hover:w-[25rem] bg-gray-100"></div>
    </div>
  );
}
