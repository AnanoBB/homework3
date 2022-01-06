
import './App.css';
import Navbar from './component/Navbar';
import Welcome from './component/Welcome';
import Sponsors from './component/Sponsors';
import Details from './component/Details';
import Creative from './component/Creative';
import Professionals from './component/Professionals';
import Footer from './component/Footer';





function App() {
  return (
    <div >
        <Navbar/>
        <Welcome/>
        <Sponsors />
        <Details />
        <Creative />
        <Professionals />
        <Footer />
      
    </div>
  );
}

export default App;
