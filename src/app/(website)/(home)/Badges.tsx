interface BadgesProps {
  text: string;
}

const Badges: React.FC<BadgesProps> = ({
  text,

}) => {
  return (
    <>
      <span className=" bg-brand-500 rounded-sm  py-1.5 px-2">
        {text}
      </span>
    </>
  );
};

export default Badges;
