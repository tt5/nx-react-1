import { About } from '@first/about';
import { Help, Faq, Contact } from '@first/help';
import { Blog, Post, postLoader, Posts, postsLoader } from '@first/blog';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Nav } from '@first/shared/ui';
import Home from './home/home';
import NotFound from './not-found/not-found';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />}>
        <Route path="faq" element={<Faq />}/>
        <Route path="contact" element={<Contact />}/>
      </Route>
      <Route path="blog" element={<Blog />}>
        <Route
        index
        element={<Posts />}
        loader={postsLoader}
        />
        <Route
          path=":id"
          element={<Post/>}
          loader={postLoader}
        />
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Route>
  )
);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
