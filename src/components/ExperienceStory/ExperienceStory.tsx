import { useState } from "react";
import { experienceStoryContent } from "../../common/types";
import { useMediaQuery } from "react-responsive";
import "./ExperienceStory.scss";
import ExperienceStoryContentRow from "./ExperienceStoryContent/ExperienceStoryContentRow";
import ExperienceStoryContentModal from "./ExperienceStoryContent/ExperienceStoryContentModal";

interface IProps {
  storyTitle: string;
  content: experienceStoryContent;
}

const ExperienceStory = (props: IProps) => {
  const { storyTitle, content } = props;
  const [showStory, setShowStory] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });

  const changeExpandedState = () => {
    setShowStory(!showStory);
  };

  const contentComponent = isMobile ? (
    <ExperienceStoryContentModal
      content={content}
      handleClose={changeExpandedState}
      storyTitle={storyTitle}
    />
  ) : (
    <ExperienceStoryContentRow content={content} />
  );

  return (
    <>
      <div
        className={"experience-story-button" + (showStory ? " open" : "")}
        onClick={changeExpandedState}
      >
        <h3>{storyTitle}</h3>
        <div className={showStory ? "up" : "down"}>
          <i className={"fa fa-2x fa-angle-" + (showStory ? "up" : "down")} />
        </div>
      </div>
      {showStory ? contentComponent : null}
    </>
  );
};

export default ExperienceStory;
