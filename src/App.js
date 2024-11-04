import './App.css';
import  HeroBanner  from './components/HeroBanner/HeroBanner.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import  SkillsBox  from './components/SkillsBox/SkillsBox.jsx'
import FooterBar from './components/FooterBar/FooterBar.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
function App() {
  return (
    <div className="App">
        <HeroBanner bannerTitle={"Tom Pringle"}/>
        <NavBar/>
        <AboutMe/>
      <SkillsBox/>
      <FooterBar/>
    </div>
  );
};

export default App;
