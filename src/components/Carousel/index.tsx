import { useCallback, useEffect, useState } from "react";
import "./Carousel.scss";

interface IProps {
  children: Array<JSX.Element>;
  smallContent: boolean;
}

const Carousel = (props: IProps) => {
  const { children, smallContent } = props;

  const [index, setIndex] = useState(0);

  const decrementSafely = useCallback(() => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(children.length - 1);
    }
  }, [children.length, index]);

  const incrementSafely = useCallback(() => {
    if (index < children.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }, [children.length, index]);

  useEffect(() => {
    const handleKeyEvent = (e) => {
      if (e.keyCode === 37) {
        decrementSafely();
      } else if(e.keyCode === 39) {
        incrementSafely();
      }
    }
    
    document.addEventListener("keydown", handleKeyEvent);

    return () => {
      document.removeEventListener("keydown", handleKeyEvent);
    };
  }, [incrementSafely, decrementSafely]);

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
