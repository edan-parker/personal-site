import './App.scss';
import 'font-awesome/scss/font-awesome.scss'
import Resume from './components/Resume';
import Bio from './components/Bio';
import Skills from './components/Skills';
import ExperienceStories from './components/ExperienceStory';

function App() {
  return (
    <div  className={'main-site'}>
      <Bio />
      <Skills />
      <ExperienceStories />
      <Resume />
    </div>
  );
}

export default App;
