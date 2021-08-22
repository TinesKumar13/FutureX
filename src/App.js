import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import First from './section/First';
import Second from './section/Second';
import Third from './section/Third';
import Fourth from './section/Fourth';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <Footer/>
    </div>
  );
}

export default App;
