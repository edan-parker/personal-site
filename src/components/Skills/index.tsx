import skillsData from "../../common/data/skillsData.json";
import "./Skills.scss";
import SkillsFS from "./SkillsFS";

const Skills = () => {
  const skillGroups: any = [];
  let skillGroup: any = [];
  for (let i = 0; i < skillsData.length; i++) {
    skillGroup.push(skillsData[i]);
    if (i % 2 !== 0) {
      skillGroups.push(skillGroup);
      skillGroup = [];
    }
  }

  return (
    <>
      {skillGroups.map((group) => (
        <div className={"skill-group"}>
          <SkillsFS fieldSetName={group[0].name} skillsData={group[0].data} />
          <span className={"skill-separator"} />
          <SkillsFS fieldSetName={group[1].name} skillsData={group[1].data} />
        </div>
      ))}
    </>
  );
};

export default Skills;
