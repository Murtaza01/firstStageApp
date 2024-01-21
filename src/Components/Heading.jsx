export default function Heading({ text }) {
  return (
    <h2
      className="headingFont before:headerStyle relative isolate mx-auto my-8
     max-w-max text-3xl font-semibold sm:text-4xl"
    >
      {text}
    </h2>
  );
}
