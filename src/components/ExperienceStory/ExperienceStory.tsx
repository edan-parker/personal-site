import { experienceStoryContent } from "../../common/types";
import { useMediaQuery } from "react-responsive";
import "./ExperienceStory.scss";
import ExperienceStoryContentRow from "./ExperienceStoryContent/ExperienceStoryContentRow";
import ExperienceStoryContentModal from "./ExperienceStoryContent/ExperienceStoryContentModal";

interface IProps {
  storyTitle: string;
  content: experienceStoryContent;
  toggleStory: () => void;
  visible: boolean;
}

const ExperienceStory = (props: IProps) => {
  const { storyTitle, content, toggleStory, visible } = props;
  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });

  const contentComponent = isMobile ? (
    <ExperienceStoryContentModal
      content={content}
      handleClose={toggleStory}
      storyTitle={storyTitle}
    />
  ) : (
    <ExperienceStoryContentRow content={content} handleClose={toggleStory} />
  );

  return (
    <>
      <div
        className={"experience-story-button" + (visible ? " open" : "")}
        onClick={toggleStory}
      >
        <h3>{storyTitle}</h3>
        <div className={visible ? "up" : "down"}>
          <i className={"fa fa-2x fa-angle-" + (visible ? "up" : "down")} />
        </div>
      </div>
      {visible ? contentComponent : null}
    </>
  );
};

export default ExperienceStory;
