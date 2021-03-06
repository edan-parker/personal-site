import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useRef, useEffect } from "react";
import Carousel from "../Carousel";
import "./ModalWithCarousel.scss";

interface IProps {
  children: Array<JSX.Element>;
  handleClose: () => void;
  title: string;
  small?: boolean;
}

const ModalWithCarousel = (props: IProps) => {
  const { children, handleClose, title, small } = props;

  const modalContentRef = useRef<HTMLDivElement>(null);

  // This will close modal when clicking away
  useEffect(() => {
    const handleClick = (e) => {
      if (!modalContentRef.current!.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClick);

    const handleKeyEvent = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyEvent);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyEvent);
    };
  }, [handleClose]);

  useEffect(() => {
    disableBodyScroll(modalContentRef);

    return () => enableBodyScroll(modalContentRef);
  }, [modalContentRef]);

  return (
    <div className={"content-modal"}>
      <div className={"modal-container"} ref={modalContentRef}>
        <div className={"header"}>
          <h2>{title}</h2>
          <i
            className={"fa fa-2x fa-times-circle close-button"}
            onClick={handleClose}
          />
        </div>
        <Carousel smallContent={small || false}>{children}</Carousel>
      </div>
    </div>
  );
};

export default ModalWithCarousel;
