interface IProps {
  skillText: string;
  handleSkillClick: () => void;
}

const SkillsElement = (props: IProps) => {
  const { skillText, handleSkillClick } = props;

  return (
    <button className={"skills-button"} onClick={handleSkillClick}>
      {skillText}
    </button>
  );
};

export default SkillsElement;
