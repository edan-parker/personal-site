import { useState } from "react";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify'

import ModalWithCarousel from "../ModalWithCarousel";
import SkillsElement from "./SkillsElement";

type SkillsDataItem = {
  name: string;
  description: string;
};

interface IProps {
  fieldSetName: string;
  skillsData: Array<SkillsDataItem>;
}

const SkillsFS = (props: IProps) => {
  const { fieldSetName, skillsData } = props;

  const [showModal, setShowModal] = useState(false);
  const [skillsModalList, setSkillsModalList] = useState(
    JSON.parse(JSON.stringify(skillsData))
  );

  return (
    <>
      <fieldset className={"skills"}>
        <legend>{fieldSetName}</legend>
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
          title={fieldSetName}
          handleClose={() => setShowModal(!showModal)}
          small
        >
          {skillsModalList.map((skill) => {
            return (
              <div className={"skills-modal-content"}>
                <h1>{skill.name}</h1>
                <span className={"skills-modal-text"}>
                  {skill.description}
                  <br /><br />
                  See {parse(DOMPurify.sanitize(skill.moreInfo))} for more info.
                  </span>
              </div>
            );
          })}
        </ModalWithCarousel>
      )}
    </>
  );
};

export default SkillsFS;
