interface IProps {
  skillText: string;
  keys?: Array<string>;
}

const SkillsElement = (props: IProps) => {
  const { skillText } = props;

  return <button className={"skills-button"}>{skillText}</button>;
};

export default SkillsElement;
