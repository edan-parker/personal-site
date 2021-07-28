import resumeData from '../common/resumeData.json';
import ResumeItem from './ResumeItem';
import waveLogo from '../../resources/wave-logo.png';
import calianLogo from '../../resources/calian-logo.png';
import rmcLogo from '../../resources/rmc-logo.png';

const Resume = () => {
    const logoMap = {
        'Wave': waveLogo,
        'Calian': calianLogo,
        'RMC': rmcLogo,
    };

    return (
        <>
            {resumeData.map((resumeItem) => {
                return (
                    <ResumeItem
                        logo={logoMap[resumeItem.companyName]}
                        companyName={resumeItem.companyName}
                        jobRole={resumeItem.jobRole}
                        description={resumeItem.description}
                        startDate={resumeItem.startDate}
                        endDate={resumeItem.endDate}
                    />
                )
            })}
        </>
    )
}

export default Resume;
