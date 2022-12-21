// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RoutesAbout } from '@first/about';
import { Route, Routes } from 'react-router-dom';
import Home from './home/home';
import styles from './app.module.css';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<RoutesAbout />}></Route>
      </Routes>
    </>
  );
}

export default App;
