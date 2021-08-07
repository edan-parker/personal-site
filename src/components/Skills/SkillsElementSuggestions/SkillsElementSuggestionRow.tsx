interface IProps {
  id: string;
  content: string;
  setTooltipActiveState?: (bool) => void;
}

const SkillsElementSuggestionRow = (props: IProps) => {
  const { id, content, setTooltipActiveState } = props;
  const scrollToEvent = new CustomEvent("scroll_" + id, { detail: { id } });

  const scrollToElement = (e) => {
    e.stopPropagation();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      document.dispatchEvent(scrollToEvent);
      if (setTooltipActiveState) {
        setTooltipActiveState(false);
      }
    }
  };

  return (
    <tbody className={"suggestion-row"} onClick={scrollToElement}>
      <tr>{content.substring(0, 35) + "..."}</tr>
    </tbody>
  );
};

export default SkillsElementSuggestionRow;
