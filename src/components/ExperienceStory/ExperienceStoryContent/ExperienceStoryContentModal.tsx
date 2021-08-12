import { ExperienceStoryTypes } from "../../../common/constants";
import { experienceStoryContent } from "../../../common/types";
import ExperienceStorySubItem from "./ExperienceStorySubItem";
import ModalWithCarousel from "../../ModalWithCarousel";

interface IProps {
  content: experienceStoryContent;
  handleClose: () => void;
  storyTitle: string;
}

const ExperienceStoryContentModal = (props: IProps) => {
  const { content, handleClose, storyTitle } = props;

  return (
    <ModalWithCarousel handleClose={handleClose} title={storyTitle}>
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
    </ModalWithCarousel>
  );
};

export default ExperienceStoryContentModal;
