import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background:darkMode ? 'black': '',
      color:darkMode? 'white':''
    }}
    >
     <Navbar />
     <Intro />
     <Services />
     <Experience />
     <Footer /> 
    </div>
  );
}

export default App;
