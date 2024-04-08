export default function Section({ children, section_id, className }) {
  return (
    <div
      id={section_id}
      className={"flex flex-col items-center justify-center h-fit " + className}
    >
      {children}
    </div>
  );
}
