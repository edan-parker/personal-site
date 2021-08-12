import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useRef, useEffect } from "react";
import Carousel from "../Carousel";
import "./ModalWithCarousel.scss";

interface IProps {
  children: Array<JSX.Element>;
  handleClose: () => void;
  title: string;
}

const ModalWithCarousel = (props: IProps) => {
  const { children, handleClose, title } = props;

  const modalContentRef = useRef<HTMLDivElement>(null);

  // This will close modal when clicking away
  useEffect(() => {
    const handleClick = (e) => {
      if (!modalContentRef.current!.contains(e.target)) {
        handleClose();
      }
    };
    
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClose]);

  useEffect(() => {
    disableBodyScroll(modalContentRef);

    return () => enableBodyScroll(modalContentRef)
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
        <Carousel>{children}</Carousel>
      </div>
    </div>
  );
};

export default ModalWithCarousel;
