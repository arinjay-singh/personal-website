export default function Section({ children, section_id }) {
  return (
    <div
      id={section_id}
      className="flex flex-col items-center justify-center h-screen"
    >
      {children}
    </div>
  );
}
