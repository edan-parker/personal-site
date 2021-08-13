import ExperienceStory from "./ExperienceStory";
import experienceStoryData from "../../common/experienceStoryData.json";
import { useState } from "react";

const ExperienceStories = () => {
  const initialAccordianState = experienceStoryData.reduce(
    (obj, story) => Object.assign(obj, { [story.id]: false }),
    {}
  );
  const [accordionsOpenState, setAccordionsOpenState] = useState(
    initialAccordianState
  );

  return (
    <>
      <div className={"section-header"}>
        <h2>Experience Stories</h2>
      </div>
      <hr className={"divider"} />
      <div className={"section-description"}>
        This is a section to highlight some particularly interesting programming
        challenges that I've faced and how I solved them. Click one of the
        headers below and check it out!
      </div>
      {experienceStoryData.map((story) => {
        const toggleStory = () => {
          const currentState = accordionsOpenState[story.id];
          if (currentState) {
            setAccordionsOpenState({
              ...accordionsOpenState,
              [story.id]: false,
            });
          } else {
            setAccordionsOpenState({
              ...initialAccordianState,
              [story.id]: true,
            });
          }
        };

        return (
          <ExperienceStory
            storyTitle={story.storyTitle}
            content={story.content}
            toggleStory={toggleStory}
            visible={accordionsOpenState[story.id]}
          />
        );
      })}
    </>
  );
};

export default ExperienceStories;
