export default function Section({ title, description, children }) {
  return (
    <section className="min-h-screen px-3 lg:max-w-5xl mx-auto flex flex-col justify-center items-center border-2 border-blue-500">
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="text-center">{description}</p>
      {children}
    </section>
  );
}
