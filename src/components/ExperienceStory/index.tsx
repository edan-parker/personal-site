import ExperienceStory from "./ExperienceStory";
import experienceStoryData from '../../common/experienceStoryData.json';

const ExperienceStories = () => {
    return (
        <div className={'experience-stories'}>
            <div className={'section-header'}>
                <h2>Experience Stories</h2>
            </div>
            <hr className={'divider'}/>
            {experienceStoryData.map(story => (
                <ExperienceStory
                    storyTitle={story.storyTitle}
                    content={story.content}
                />
            ))}
        </div>
    )
}

export default ExperienceStories;