export default function ResearchModule({ children }) {
  return (
    <div className=" h-[35rem] w-[35rem] hover:w-[50rem] rounded-lg ring-1 ring-slate-200 shadow-xl hover:shadow-2xl ease-in-out duration-500">
      {children}
    </div>
  );
}
