
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/Intro";
import Skill from "./components/Skills/skill";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;