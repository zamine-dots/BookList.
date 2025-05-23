import Home from './components/Home'
import Seacrh from './components/Seacrh';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Seacrh />} />
      </Routes>
    </Router>
  );
}

export default App;
