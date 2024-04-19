"use client";

import Section from "../subcomponents/section";
import ContactForm from "../subcomponents/contact-form";

export default function Contact() {

  return (
    <Section section_id="contact" className={"pt-24 pb-16"}>
      <h1 className=" text-5xl font-bold text-cyan-600 py-8">Contact Me</h1>
      <ContactForm />
    </Section>
  );
}
