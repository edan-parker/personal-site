import { useState } from "react";
import "./Carousel.scss";

interface IProps {
  children: Array<JSX.Element>;
  smallContent: boolean;
}

const Carousel = (props: IProps) => {
  const { children, smallContent } = props;

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

  return (
    <div className={"carousel-container"}>
      <div className={"main-row"}>
        <i
          className={"fa fa-chevron-circle-left fa-2x arrow"}
          onClick={decrementSafely}
        />
        <div className={smallContent ? "small-content" : ""}>
          {children[index]}
        </div>
        <i
          className={"fa fa-chevron-circle-right fa-2x arrow"}
          onClick={incrementSafely}
        />
      </div>
    </div>
  );
};

export default Carousel;
