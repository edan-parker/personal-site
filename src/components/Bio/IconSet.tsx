import { openLinkInNewTab } from "../../utils/linkUtils";
import resume from "../../common/files/edan-parker-resume.pdf";

const IconSet = () => {
  return (
    <div className={"icon-set"}>
      <div className={"icon-element"}>
        <i
          className={"fa fa-github fa-4x"}
          onClick={() => openLinkInNewTab("https://github.com/edan-parker")}
        />
        <span className={"icon-text"}>github</span>
      </div>
      <div className={"icon-element"}>
        <i
          className={"fa fa-file-o fa-4x"}
          onClick={() => openLinkInNewTab(resume)}
        />
        <span className={"icon-text"}>resume</span>
      </div>
      <div className={"icon-element"}>
        <i
          className={"fa fa-linkedin fa-4x"}
          onClick={() =>
            openLinkInNewTab("https://www.linkedin.com/in/edanparker/")
          }
        />
        <span className={"icon-text"}>linkedin</span>
      </div>
    </div>
  );
};

export default IconSet;
