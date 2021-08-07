import { ExperienceStoryTypes } from "../../../common/constants";

interface IProps {
  text: string;
  type: ExperienceStoryTypes;
}

const ExperienceStorySubItem = (props: IProps) => {
  const { text, type } = props;

  return (
    <div className={"sub-item"}>
      <h2 className={"title"}>{type}</h2>
      <div className={"text"}>{text}</div>
    </div>
  );
};

export default ExperienceStorySubItem;
