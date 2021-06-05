export default function About() {
  return (
    <section id="about" className="section section-alternate">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
            recusandae delectus, nulla temporibus quas fuga modi voluptatum
            aliquid iure quasi consectetur autem qui dolore provident rem,
            mollitia nobis incidunt inventore.
          </p>
          <div className="flex justify-end items-center">
            <img
              className="rounded-md shadow-md"
              src="/profile.jpeg"
              alt="Wahab Shaikh"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
