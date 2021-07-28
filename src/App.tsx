import './App.scss';
import 'font-awesome/scss/font-awesome.scss'
import Resume from './components/Resume';
import Bio from './components/Bio';
import Skills from './components/Skills';

function App() {
  return (
    <div  className={'main-site'}>
      <Bio />
      <Skills />
      <Resume />
    </div>
  );
}

export default App;
