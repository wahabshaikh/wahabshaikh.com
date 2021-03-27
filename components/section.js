export default function Section({ children }) {
  return (
    <section className="min-h-screen flex justify-center items-center border-2 border-blue-500">
      {children}
    </section>
  );
}
