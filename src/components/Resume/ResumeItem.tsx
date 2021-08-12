interface IProps {
  logo: string;
  companyName: string;
  jobRole: string;
  startDate: string;
  endDate: string;
  description: Array<string>;
}

const ResumeItem = (props: IProps) => {
  const { logo, companyName, jobRole, description, startDate, endDate } = props;

  return (
    <div>
      <div className={"header"}>
        <img className={"company-logo"} src={logo} alt={companyName} />
        <div className={"company-info"}>
          <div className={"company-name"}>{companyName}</div>
          <div>{jobRole}</div>
          <div className={"employment-date"}>{startDate + " - " + endDate}</div>
        </div>
      </div>
      <ul className={"description"}>
        {description.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeItem;
