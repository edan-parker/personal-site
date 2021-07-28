import Tooltip from '../Tooltip';
import SkillsElementSuggestions from './SkillsElementSuggestions/SkillsElementSuggestions';

interface IProps {
    skillText: string,
    keys?: Array<string>
}

const SkillsElement = (props: IProps) => {
    const {skillText, keys} = props;

    const skillKeys: Array<string> = keys ? keys : [skillText];
    const skillsContent = <SkillsElementSuggestions keys={skillKeys} setTooltipActiveState={()=>{}}/>

    return (
      <Tooltip
      content={skillsContent}
      >
        <button className={'skills-button'}>
          {skillText}
        </button>
      </Tooltip>
    );
}

export default SkillsElement;