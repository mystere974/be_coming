import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Map from './screen/map/Map';
import Home from './screen/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
