import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@/layout/layout';
import Home from '@/pages/Home';
import Movies from '@/pages/Movie';
import NewPopular from '@/pages/NewPopular';
import NotFound from '@/pages/NotFound';
import Admin from '@/pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<Movies />} />
          <Route path="/new-popular" element={<NewPopular />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<></>}></Route>
          <Route path="" element={<></>}></Route>
          <Route path="" element={<></>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
