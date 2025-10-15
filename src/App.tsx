import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import WeatherApp from './Components/WeatherApp';
import StudentList from './Components/StudentList';
import StudentDetail from './Components/StudentDetail';
import NewsFeed from './Components/NewsFeed';
import './App.css'; // File CSS để style cho NavLink

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/bai1">Bài 1: Thời tiết</NavLink>
          <NavLink to="/bai2">Bài 2: Sinh viên</NavLink>
          <NavLink to="/bai3">Bài 3: Tin tức</NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/bai1" element={<WeatherApp />} />
            <Route path="/bai2" element={<StudentList />} />
            <Route path="/student/:id" element={<StudentDetail />} /> {/* Route cho chi tiết sinh viên */}
            <Route path="/bai3" element={<NewsFeed />} />
            <Route path="/" element={<h2>Chọn một bài thực hành để bắt đầu</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;