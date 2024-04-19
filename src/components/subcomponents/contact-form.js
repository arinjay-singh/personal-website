import ContactField from "./contact-field";
import Button from "./button";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    console.log(body);
    document.getElementById("contact-form").reset();
  };

  return (
    <form
      id="contact-form"
      className=" w-1/2 space-y-4"
      onSubmit={handleSubmit}
    >
      <div className=" flex flex-row gap-5">
        <ContactField label="name" onChange={setName} />
        <ContactField label="email" onChange={setEmail} />
      </div>
      <ContactField label="subject" onChange={setSubject} />
      <ContactField label="message" onChange={setMessage} isMessage />
      <Button label="Send" />
    </form>
  );
}
