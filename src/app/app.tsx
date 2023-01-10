import { About } from '@first/about';
import Home from './home/home';
import { 
  createBrowserRouter,
  createRoutesFromElements, 
  Route, 
  RouterProvider,
} from 'react-router-dom';
import { Nav } from '@first/shared/ui';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={
        <Nav />
      }>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)


export function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
