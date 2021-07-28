import { useCallback, useEffect, useRef, useState } from "react";
import "./Tooltip.scss";

interface IProps {
  children: JSX.Element | string,
  content: JSX.Element,
}

const Tooltip = (props: IProps) => {
  const {children, content} = props;

  const [active, setActive] = useState(false);
  
  const node = useRef<HTMLDivElement>(null);

  // This will add an click event listener on this component after render
  // need to remove this listener when component is unmounted
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  // This will open the tooltip if clicking on button or tip
  // and will close if clicking outside of element
  // by comparing the reference to component vs event target
  const handleClick = e => {
    if (node.current!.contains(e.target)) {
      setActive(true);
      return;
    }
    setActive(false);
  };

  // This allows content component to set active state (for example close tooltip on click)
  const wrapperSetActive = useCallback(val => {
    setActive(val);
  }, [setActive]);

  const contentWithSetActive = <content.type {...content.props} setTooltipActiveState={wrapperSetActive} />

  return (
    <div
        ref={node}
        className="tooltip-wrapper"
        onClick={handleClick}
    >
      {children}
      {active && (
        <div className={`tooltip-tip bottom`}>
          {contentWithSetActive}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
