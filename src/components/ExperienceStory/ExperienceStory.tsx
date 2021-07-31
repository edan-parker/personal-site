import { useState } from 'react';
import { ExperienceStoryTypes, lateralDirection } from '../../common/constants';
import { experienceStoryContent } from '../../common/types';
import './ExperienceStory.scss';
import ExperienceStorySubItem from './ExperienceStorySubItem';

interface IProps {
    storyTitle: string 
    content: experienceStoryContent,
}

const ExperienceStory = (props: IProps) => {
    const { storyTitle, content} = props;
    const [showStory, setShowStory] = useState(false);
    const id = 'story-' + storyTitle.toLowerCase().replace(' ', '-');

    const storyTitleHeader = <h1>{storyTitle}</h1>;

    const changeExpandedState = () => {
        setShowStory(!showStory);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({behavior: "smooth"});
        }
    }

    const openState = 'fa fa-angle-' + 
        (showStory ? 'up' : 'down') +
        ' fa-2x ' +
        'open-state-icon-' + 
        (showStory ? 'collapse' : 'expand');
    

    return (
        <div className={'experience-story-container'}>
            <div id={id} className={'experience-story ' + (showStory ? 'expanded' : 'collapsed')}>
                { showStory ? 
                    <>
                        {storyTitleHeader}
                        <ExperienceStorySubItem
                            alignment={lateralDirection.LEFT}
                            text={content.problem}
                            type={ExperienceStoryTypes.PROBLEM}
                        />
                        <ExperienceStorySubItem
                            alignment={lateralDirection.RIGHT}
                            text={content.solution}
                            type={ExperienceStoryTypes.SOLUTION}
                        />
                        <ExperienceStorySubItem
                            alignment={lateralDirection.LEFT}
                            text={content.result}
                            type={ExperienceStoryTypes.RESULT}
                        />
                    </>
                : null}
                <div className={'open-state'} onClick={changeExpandedState}>
                    <i className={openState}/>
                    {!showStory ? storyTitleHeader : null}
                    <i className={openState}/>
                </div>
            </div>
        </div>
    );
};

export default ExperienceStory;
