import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import DetailSurahPage from './pages/DetailSurahPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surah/:surahid" element={<DetailSurahPage />} />
      </Routes>
    </div>
  );
}

export default App
