import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/home.scss"
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./styles/Footer.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <calc />
      <Footer />
    </Router>
    
  );
}

export default App;
