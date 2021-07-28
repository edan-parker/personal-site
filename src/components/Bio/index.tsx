import './Bio.scss'
import picOfMe from '../../resources/pic-of-edan.jpg';
import IconSet from './IconSet';
import { openLinkInNewTab } from '../../utils/linkUtils';

const Bio = () => {
    const handleLinkClick = () => {
        openLinkInNewTab('https://www.queensu.ca/mathstat/mthe');
    };
    
    return (
        <div className={'bio-container'}>
            <div className={'bio'} >
                <h1>Edan Parker</h1>
                <h2>Full stack generalist</h2>
                <IconSet />
                <div className={'bio-text'}>
                    I am an <em onClick={handleLinkClick} className="text-link">applied math engineering</em> student graduating in 04/2022. I am passionate about fullstack development and interested in distributed computing.
                </div>
            </div>
            <img className={'pic-of-me'} src={picOfMe}  alt="Me on my balcony in Kingston"/>
        </div>
    )
}

export default Bio;