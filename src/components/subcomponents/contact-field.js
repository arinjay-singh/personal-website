export default function ContactField({ label, onChange, isMessage }) {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={label}
        className=" font-normal font-sans text-slate-600 px-2 mb-0.5"
      >
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
      {isMessage ? (
        <textarea
          id={label}
          name={label}
          placeholder={"Please enter your " + label + " here."}
          onChange={onChange}
          required
          className=" rounded-lg px-2 py-2 border-2 border-slate-200 h-32"
        />
      ) : (
        <input
          type={label}
          id={label}
          name={label}
          placeholder={(label === "name" ? "First Last" : (label === "email") ? "name@example.com" : "Subject (optional)")}
          onChange={onChange}
          required={label === "subject" ? false : true}
          className=" rounded-lg px-2 py-2 border-2 border-slate-200"
        />
      )}
    </div>
  );
}
