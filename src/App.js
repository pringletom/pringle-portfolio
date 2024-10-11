import './App.css';
import  HeroBanner  from './components/HeroBanner/HeroBanner.jsx';
import  SkillsBox  from './components/SkillsBox/SkillsBox.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx';
import FooterBar from './components/FooterBar/FooterBar.jsx';
function App() {
  return (
    <div className="App">
        <HeroBanner bannerTitle={"Tom Pringle"}/>
        <AboutMe/>
      <SkillsBox/>
      <FooterBar/>
    </div>
  );
};

export default App;
