import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Work from "./components/Work"
import About from "./components/about"
import Skills from "./components/skills"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Footer></Footer>
    </div>
  );
}

export default App;
