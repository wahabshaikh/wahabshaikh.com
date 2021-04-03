import Section from "./section";
import Form from "./form";

export default function Contact() {
  return (
    <Section id="contact" alternate>
      <h2 className="font-heading font-black text-5xl sm:text-7xl">Contact</h2>
      <p className="mb-8 text-center sm:text-lg text-gray-700 dark:text-gray-300">
        Interested? Send me a message.
      </p>
      <Form />
    </Section>
  );
}
