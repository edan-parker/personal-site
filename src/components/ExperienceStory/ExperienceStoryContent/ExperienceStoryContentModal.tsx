import { ExperienceStoryTypes } from "../../../common/constants";
import { experienceStoryContent } from "../../../common/types";
import ExperienceStorySubItem from "./ExperienceStorySubItem";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useRef } from "react";
import { useEffect } from "react";
import ModalWithCarousel from "../../ModalWithCarousel";

interface IProps {
  content: experienceStoryContent;
  handleClose: () => void;
  storyTitle: string;
}

const ExperienceStoryContentModal = (props: IProps) => {
  const { content, handleClose, storyTitle } = props;

  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    disableBodyScroll(modalContentRef);

    return () => enableBodyScroll(modalContentRef);
  }, [modalContentRef]);

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
