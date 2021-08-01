import { ExperienceStoryTypes } from "../../../common/constants";
import { experienceStoryContent } from "../../../common/types";
import ExperienceStorySubItem from "./ExperienceStorySubItem";
import './ExperienceStoryContent.scss';

interface IProps {
    content: experienceStoryContent,
}

const ExperienceStoryContentRow = (props: IProps) => {
    const {content} = props;
    
    return (
        <div className={'content-row'}>
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
        </div>
    )
};

export default ExperienceStoryContentRow;