import Container from "./container";

export default function Section({ id, alternate, children }) {
  return (
    <section id={id} className={alternate && "bg-gray-200 dark:bg-gray-800"}>
      <Container main>{children}</Container>
    </section>
  );
}
