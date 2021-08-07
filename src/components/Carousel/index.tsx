import { useState } from "react";
import "./Carousel.scss";

interface IProps {
  children: Array<JSX.Element>;
}

const Carousel = (props: IProps) => {
  const { children } = props;

  const [index, setIndex] = useState(0);

  const decrementSafely = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(children.length - 1);
    }
  };

  const incrementSafely = () => {
    if (index < children.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  let navButtons: Array<JSX.Element> = [];
  for (let i = 0; i < children.length; i++) {
    const className = "fa fa-2x button fa-circle" + (index === i ? "" : "-o");
    const navBtnHandler = () => setIndex(i);
    navButtons.push(<i className={className} onClick={navBtnHandler} />);
  }

  return (
    <div className={"carousel-container"}>
      <div className={"main-row"}>
        <i
          className={"fa fa-chevron-circle-left fa-2x arrow"}
          onClick={decrementSafely}
        />
        {children[index]}
        <i
          className={"fa fa-chevron-circle-right fa-2x arrow"}
          onClick={incrementSafely}
        />
      </div>
      <div className={"nav-buttons"}>{navButtons}</div>
    </div>
  );
};

export default Carousel;
