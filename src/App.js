import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Students from './components/Students';
import User1 from './components/User1';
import User2 from './components/User2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />}>
            <Route path="user1" element={<User1 />} />
            <Route path="user2" element={<User2 />} />
          </Route>
          <Route path="students" element={<Students />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
