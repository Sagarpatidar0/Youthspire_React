import Navbar from "../src/components/Navbar/Navbar"
import RankSection from "./components/Marquee/Marquee";
import Scroller from "./components/Scroller";
import Header from "./components/header/Header";


function App() {
  return (
    <>  
     <Navbar/>
    <Header/>
    <Scroller />
    <RankSection/>
    </>
  );
}

export default App;
