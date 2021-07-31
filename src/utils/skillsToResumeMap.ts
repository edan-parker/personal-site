import resumeData from '../common/resumeData.json';
import { resumeDescriptionObject } from '../common/types';

const skillsToResumeMap = (skillText:string): Array<resumeDescriptionObject> => {
    let flatDescriptionArray: Array<resumeDescriptionObject> = [];
    resumeData.work.forEach((resumeItem) => flatDescriptionArray.push(...resumeItem.description));

    const filteredArray = flatDescriptionArray.filter((description) => {
        return description.text.toLowerCase().includes(skillText.toLowerCase());
    });
    return [...new Set(filteredArray)]
}

export default skillsToResumeMap;
