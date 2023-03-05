import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Complex from './components/Complex';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route path="/:num" element={<Number/>}/>
        <Route path="/:word" element={<Word/>}/>
        <Route path="/:word/:text/:background" element={<Complex/>}/>
      </Routes>
    </div>
  );
}

export default App;
