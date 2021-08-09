import SkillsElement from "./SkillsElement";
import "./Skills.scss";

const Skills = () => {
  return (
    <fieldset className={"skills"}>
      <legend>Skills</legend>
      <SkillsElement skillText={"ReactJS"} />
      <SkillsElement skillText={"GraphQL"} />
      <SkillsElement skillText={"Python"} />
      <SkillsElement skillText={"Javascript"} />
      <SkillsElement skillText={"ExtJS"} />
      <SkillsElement skillText={"Docker"} />
      <SkillsElement skillText={"Testing"} />
      <SkillsElement skillText={"Observability"} />
    </fieldset>
  );
};

export default Skills;
