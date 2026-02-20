export const Multiline: React.FunctionComponent<{
  text: string;
  useSplit?: boolean;
}> = ({ text, useSplit }) => (
  <>
    {text
      .split(/\n|\r\n/)
      .filter((x) => x.trim())
      .map((segment, index) => (
        <>
          {useSplit && <p>{segment}</p>}
          {!useSplit && index > 0 && <br />}
          {!useSplit && segment}
        </>
      ))}
  </>
);
