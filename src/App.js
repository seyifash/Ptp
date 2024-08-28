import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginUser from './LoginUser';
import Theme from './Theme/Theme';
import UserContainer from './UserContainer';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginUser/>} />
          <Route path='/home' element={<Theme />} />
          <Route path='/users' element={<UserContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
