import { useState } from 'react';
import { experienceStoryContent } from '../../common/types';
import './ExperienceStory.scss';
import ExperienceStoryContentRow from './ExperienceStoryContent/ExperienceStoryContentRow';

interface IProps {
    storyTitle: string 
    content: experienceStoryContent,
}

const ExperienceStory = (props: IProps) => {
    const { storyTitle, content} = props;

    const [showStory, setShowStory] = useState(false);

    const changeExpandedState = () => {
        setShowStory(!showStory);
    }

    return (
        <>
            <div className={'experience-story-button' + (showStory ? ' open' : '')} onClick={changeExpandedState}>
                <h3>{storyTitle}</h3>
                <div className={(showStory ? 'up' : 'down')}>
                    <i className={'fa fa-2x fa-angle-' + (showStory ? 'up' : 'down')}/>
                </div>
            </div>
            { showStory ? 
                <ExperienceStoryContentRow content={content}/>
            : null}
        </>
    );
};

export default ExperienceStory;
