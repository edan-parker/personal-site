import skillsData from "../../common/skillsData.json";
import SkillsElement from "./SkillsElement";
import "./Skills.scss";
import ModalWithCarousel from "../ModalWithCarousel";
import { useState } from "react";

const Skills = () => {
  const [showModal, setShowModal] = useState(false);
  const [skillsModalList, setSkillsModalList] = useState(
    JSON.parse(JSON.stringify(skillsData))
  );

  return (
    <>
      <fieldset className={"skills"}>
        <legend>Skills</legend>
        {skillsData.map((skill) => {
          const onSkillClick = () => {
            setShowModal(!showModal);
            let skillList = skillsModalList;
            while (skillList[0].name !== skill.name) {
              skillList.push(skillList.shift()!);
            }
            setSkillsModalList(skillList);
          };

          return (
            <SkillsElement
              skillText={skill.name}
              handleSkillClick={onSkillClick}
            />
          );
        })}
      </fieldset>
      {showModal && (
        <ModalWithCarousel
          title="Skills"
          handleClose={() => setShowModal(!showModal)}
        >
          {skillsModalList.map((skill) => {
            return (
              <div className={"skills-modal-content"}>
                <h1>{skill.name}</h1>
                {skill.description}
              </div>
            );
          })}
        </ModalWithCarousel>
      )}
    </>
  );
};

export default Skills;
