import MemosList from './components/MemosList';
import Add from './components/Add';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MemosList />} />
          <Route path="/add" element={<Add />} />
          {/* TODO: Add Search route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
