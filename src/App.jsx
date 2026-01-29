import MemosList from './features/home/MemosList';
import Add from './features/add/Add';
import Search from './features/search/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import MemoItem from './features/memo-list/MemoItem';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MemosList />} />
          <Route path="/add" element={<Add />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path='/memo/:memoId' element={<MemoItem />} />
      </Routes>

      <Toaster />
    </BrowserRouter>
  );
}
export default App;
