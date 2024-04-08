export default function ProjectModule({ children }) {
  return (
    <div className=" snap-center h-[35rem] w-[50rem] rounded-lg ring-1 ring-slate-200 shadow-xl hover:shadow-2xl transition ease-in-out">
      {children}
    </div>
  );
}
