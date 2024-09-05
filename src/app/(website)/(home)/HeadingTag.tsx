/* eslint-disable react/no-unescaped-entities */

interface HeadingProps {
  text: string;
  color?: string;
  maxWidth?: string;
}

const HeadingTag: React.FC<HeadingProps>= ({text, color, maxWidth}) => {
  return (
    <h1
      className={`text-3xl md:text-4xl text-center mx-auto ${color}`}
      style={{
        maxWidth: maxWidth,
      }}
    >
      {text}
    </h1>
  );
};

export default HeadingTag;