import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '@/layout/layout';
import Home from '@/pages/Home';
import Movies from '@/pages/Movie';
import NewPopular from '@/pages/NewPopular';
import NotFound from '@/pages/NotFound';
import Admin from '@/layout/Admin';
import Dashboard from '@/pages/Dashboard';
import ListFlim from '@/pages/ListFlim';
import UploadFlim from '@/pages/UploadFlim';

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
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path="/admin/flim" element={<ListFlim />}></Route>
          <Route
            path="/admin/upload"
            element={<UploadFlim></UploadFlim>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
