
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/Intro";
import Skill from "./components/Skills/skill";
import Works from "./components/Works/works";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
    </div>
  );
}

export default App;