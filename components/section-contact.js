import Form from "./form";

export default function Contact() {
  return (
    <section id="contact" className="section section-alternate">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="mb-8 text-center sm:text-lg text-gray-700 dark:text-gray-300">
          Interested? Send me a message.
        </p>
        <Form />
      </div>
    </section>
  );
}
