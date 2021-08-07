import { ExperienceStoryTypes } from "../../../common/constants";
import { experienceStoryContent } from "../../../common/types";
import ExperienceStorySubItem from "./ExperienceStorySubItem";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useRef } from "react";
import { useEffect } from "react";
import Carousel from "../../Carousel";

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
    <div className={"content-modal"}>
      <div className={"modal-container"} ref={modalContentRef}>
        <div className={"modal-inner"}>
          <div className={"header"}>
            <h2>{storyTitle}</h2>
            <i className={"fa fa-2x fa-times-circle"} onClick={handleClose} />
          </div>
          <Carousel>
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
      </div>
    </div>
  );
};

export default ExperienceStoryContentModal;
