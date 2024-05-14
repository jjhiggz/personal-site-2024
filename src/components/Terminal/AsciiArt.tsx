export const AsciiArt = ({ text }: { text: string }) => {
  return (
    <pre>
      {text.split("\n").map((line, i) => (
        <div key={i}>
          <code>{line}</code>
        </div>
      ))}
    </pre>
  );
};
