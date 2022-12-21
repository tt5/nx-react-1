import { About } from '@first/about';
import { Route, Routes } from 'react-router-dom';
import Home from './home/home';

export function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
  );
}

export default App;
