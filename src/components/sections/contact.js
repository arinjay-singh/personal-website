"use client";

import Button from "../subcomponents/button";
import ContactField from "../subcomponents/contact-field";
import Section from "../subcomponents/section";
import { useState } from "react";

export default function Contact() {
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
    }
    console.log(body);
    document.getElementById("contact-form").reset();
  }

  return (
    <Section section_id="contact" className={"pt-24 pb-16"}>
      <h1 className=" text-5xl font-bold text-slate-600 py-8">Contact Me</h1>
      <form id="contact-form" className=" w-1/2 space-y-4" onSubmit={handleSubmit}>
        <div className=" flex flex-row gap-5">
          <ContactField label="name" onChange={setName} />
          <ContactField label="email" onChange={setEmail} />
        </div>
        <ContactField label="subject" onChange={setSubject} />
        <ContactField label="message" onChange={setMessage} isMessage />
        <Button label="Send" />
      </form>
    </Section>
  );
}
