export default function Container({ main, children }) {
  return (
    <div
      className={`px-3 max-w-5xl mx-auto flex flex-col ${
        main
          ? "justify-center items-center min-h-screen"
          : "sm:flex-row sm:justify-between py-3"
      }`}
    >
      {children}
    </div>
  );
}
