import { ExperienceStoryTypes } from "../../../common/constants";

interface IProps {
    text: string,
    type: ExperienceStoryTypes,
}

const ExperienceStorySubItem = (props: IProps) => {
    const {text, type} = props;

    return (
        <div className={'sub-item'}>
            <h3 className={'title'}>{type}</h3>
            <div className={'text'}>
                {text}
            </div>
        </div>
    )
};

export default ExperienceStorySubItem;