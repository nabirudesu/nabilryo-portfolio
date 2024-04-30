import './App.css';
import {Link} from "react-scroll"
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Education from './components/Education'
import Home from './components/Home'
function App() {
  return (
  <>
    <Home/>
    <About/>
    <Education/>
    <Projects/>
    <Experience/>
    <Resume/>
    <Contact/>
  </>  
  );
}
export default App;
