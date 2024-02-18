export default function Heading({ children }) {
  return (
    <h2
      className="headingFont before:headerStyle relative isolate mx-auto my-8 max-w-max
     text-3xl font-semibold  sm:text-4xl"
    >
      {children}
    </h2>
  );
}
