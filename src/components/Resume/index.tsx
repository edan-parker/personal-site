import resumeData from "../../common/resumeData.json";
import "./Resume.scss";

import ResumeItem from "./ResumeItem";
import waveLogo from "../../resources/wave-logo.png";
import calianLogo from "../../resources/calian-logo.png";
import rmcLogo from "../../resources/rmc-logo.png";
import queensLogo from "../../resources/queens-logo.png";

const Resume = () => {
  const logoMap = {
    Wave: waveLogo,
    Calian: calianLogo,
    RMC: rmcLogo,
    "Queen's University": queensLogo,
  };

  return (
    <div className={"resume"}>
      <div className={"section-header"}>
        <h2>Work</h2>
      </div>
      <hr className={"divider"} />
      {resumeData.work.map((resumeItem) => {
        return (
          <ResumeItem
            logo={logoMap[resumeItem.companyName]}
            companyName={resumeItem.companyName}
            jobRole={resumeItem.jobRole}
            description={resumeItem.description}
            startDate={resumeItem.startDate}
            endDate={resumeItem.endDate}
          />
        );
      })}
      <div className={"section-header"}>
        <h2>School</h2>
      </div>
      <hr className={"divider"} />
      {resumeData.education.map((resumeItem) => {
        return (
          <ResumeItem
            logo={logoMap[resumeItem.companyName]}
            companyName={resumeItem.companyName}
            jobRole={resumeItem.jobRole}
            description={resumeItem.description}
            startDate={resumeItem.startDate}
            endDate={resumeItem.endDate}
          />
        );
      })}
    </div>
  );
};

export default Resume;
