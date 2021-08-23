import parse from "html-react-parser";
import DOMPurify from "dompurify";
import { useMediaQuery } from "react-responsive";

interface IProps {
  logo: string;
  companyName: string;
  companyTeam?: string;
  jobRole: string;
  startDate: string;
  endDate: string;
  description: Array<string>;
}

const ResumeItem = (props: IProps) => {
  const {
    logo,
    companyName,
    companyTeam,
    jobRole,
    description,
    startDate,
    endDate,
  } = props;

  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });

  const companyNameText =
    companyTeam && !isMobile ? companyName + " - " + companyTeam : companyName;

  return (
    <div>
      <div className={"header"}>
        <img className={"company-logo"} src={logo} alt={companyName} />
        <div className={"company-info"}>
          <div className={"company-name"}>{companyNameText}</div>
          {companyTeam && isMobile && (
            <div className={"company-name"}>{companyTeam}</div>
          )}
          <div>{jobRole}</div>
          <div className={"employment-date"}>{startDate + " - " + endDate}</div>
        </div>
      </div>
      <ul className={"description"}>
        {description.map((bullet, idx) => (
          <li key={idx}>{parse(DOMPurify.sanitize(bullet))}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeItem;
