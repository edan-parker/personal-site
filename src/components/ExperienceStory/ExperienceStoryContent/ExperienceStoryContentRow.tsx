import { ExperienceStoryTypes } from "../../../common/constants";
import { experienceStoryContent } from "../../../common/types";
import ExperienceStorySubItem from "./ExperienceStorySubItem";
import "./ExperienceStoryContent.scss";
import Carousel from "../../Carousel";
import { useEffect } from "react";

interface IProps {
  content: experienceStoryContent;
  handleClose: () => void;
}

const ExperienceStoryContentRow = (props: IProps) => {
  const { content, handleClose } = props;

  useEffect(() => {
    const onSpacebarPress = (e) => {
      if (e.keyCode === 32) {
        handleClose();
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", onSpacebarPress);
    return () => {
      document.removeEventListener("keydown", onSpacebarPress);
    };
  }, [handleClose]);

  return (
    <div className={"content-row"}>
      <Carousel smallContent={false}>
        <ExperienceStorySubItem
          text={content.problem}
          type={ExperienceStoryTypes.PROBLEM}
        />
        <ExperienceStorySubItem
          text={content.solution}
          type={ExperienceStoryTypes.SOLUTION}
        />
        <ExperienceStorySubItem
          text={content.result}
          type={ExperienceStoryTypes.RESULT}
        />
      </Carousel>
    </div>
  );
};

export default ExperienceStoryContentRow;
