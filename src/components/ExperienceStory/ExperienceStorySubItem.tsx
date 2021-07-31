import { ExperienceStoryTypes, lateralDirection } from "../../common/constants";

interface IProps {
    alignment: lateralDirection,
    text: string,
    type: ExperienceStoryTypes,
}

const ExperienceStorySubItem = (props: IProps) => {
    const {alignment, text, type} = props;
    console.log(alignment)
    return (
        <div className={"sub-item " + alignment}>
            <h2>{type}</h2>
            <div className={'text'}>
                {text}
            </div>
        </div>
    )
};

export default ExperienceStorySubItem;