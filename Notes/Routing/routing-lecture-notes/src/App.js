import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import ContactType from './components/ContactType';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route eaxct path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route path="/contact/:type" element={<ContactType/>}/>
      </Routes>
    </div>
  );
}

export default App;
