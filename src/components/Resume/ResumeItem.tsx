import { useEffect } from 'react';
import { resumeDescriptionObject } from '../../common/types';

interface IProps {
    logo: string,
    companyName: string,
    jobRole: string,
    startDate: string,
    endDate: string,
    description: Array<resumeDescriptionObject>,
}

const ResumeItem = (props: IProps) => {
    const {
        logo,
        companyName,
        jobRole,
        description,
        startDate,
        endDate
    } = props;

    useEffect(() => {
        for (const bullet of description) {
            document.addEventListener('scroll_' + bullet.id, handleElementScrolledTo);
        }

        return () => {
            for (const bullet of description) {
                document.removeEventListener('scroll_' + bullet.id, handleElementScrolledTo);
            }
        };
    });

    const handleElementScrolledTo = (e) => {
        const id = e.detail.id;
        const el = document.getElementById(id);
        if (el) {
            el.classList.add('highlight');
            setTimeout(() => el.classList.remove('highlight'), 2000);
        }
    }

    return (
        <div>
            <div className={'header'}>
                <img className={'company-logo'} src={logo}  alt={companyName}/>
                <div className={'company-info'}>
                    <div className={'company-name'}>{companyName}</div>
                    <div>{jobRole}</div>
                    <div className={'employment-date'}>{startDate + ' - ' + endDate}</div>
                </div>
            </div>
            <ul className={'description'}>
                {description.map((bullet, idx) => (
                    <li key={idx} id={bullet.id}>{bullet.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default ResumeItem;
