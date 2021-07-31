import { resumeDescriptionObject } from '../../../common/types';
import SkillsElementSuggestionRow from './SkillsElementSuggestionRow';
import skillsToResumeMap from '../../../utils/skillsToResumeMap';
import './SkillsElementSuggestions.scss';

interface IProps {
    keys: Array<string>,
    setTooltipActiveState?: (bool) => void,
}

const SkillsElementSuggestions = (props: IProps) => {
    const { keys, setTooltipActiveState } = props;
    let resumeElements: Array<resumeDescriptionObject> = [];

    keys.forEach((key) => resumeElements.push(...skillsToResumeMap(key)));

    const list = resumeElements.map(
        (el, idx) => (
            <table>
                <SkillsElementSuggestionRow
                    key={idx}
                    id={el.id}
                    content={el.text}
                    setTooltipActiveState={setTooltipActiveState}
                />
            </table>
        )
    );

    return <div>{list}</div>
}

export default SkillsElementSuggestions;