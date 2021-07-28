import SkillsElement from "./SkillsElement";
import './Skills.scss';

const Skills = () => {
    return (
        <fieldset className={'skills'}>
          <legend>Skills</legend>
          <SkillsElement skillText={'ReactJS'}/>
          <SkillsElement skillText={'GraphQL'}/>
          <SkillsElement skillText={'Python'}/>
          <SkillsElement skillText={'Javascript'} keys={['Javascript', 'ExtJS', 'ReactJS']}/>
          <SkillsElement skillText={'ExtJS'}/>
          <SkillsElement skillText={'Docker'}/>
          <SkillsElement skillText={'Testing'} keys={['Test']}/>
          <SkillsElement skillText={'Observability'} keys={['Logging']}/>
        </fieldset>
    )
}

export default Skills;