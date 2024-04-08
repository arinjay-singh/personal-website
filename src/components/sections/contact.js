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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, subject, message);
    document.getElementById("contact-form").reset();
  }

  return (
    <Section section_id="contact">
      <h1 className=" text-5xl font-bold text-slate-600 py-8">Contact Me</h1>
      <form id="contact-form" className=" w-1/2 space-y-4" onSubmit={onSubmit}>
        <div className=" flex flex-row gap-5">
          <ContactField label="name" onChange={(e) => setName(e.target.value)} />
          <ContactField label="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <ContactField label="subject" onChange={(e) => setSubject(e.target.value)} />
        <ContactField label="message" onChange={(e) => setMessage(e.target.value)} isMessage />
        <Button label="Send" />
      </form>
    </Section>
  );
}
