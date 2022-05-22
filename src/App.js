import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Home from './components/dashboard/Home';
import Courses from './components/dashboard/Courses';
import Profile from './components/dashboard/Profile';
import Logout from './components/dashboard/Logout';
import CourseDetails from './components/dashboard/CourseDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path=":courseid" element={<CourseDetails />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
