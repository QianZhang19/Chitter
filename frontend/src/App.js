import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/homepage';
import Login from './components/login';
import Peeps from './components/peeps';
import Seepeeps from './components/seePeeps';
import SignUp from './components/signup';
const App = () => {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact path="/"
            element={
              <>
                {user && user._id ? <Home setLoginUser={setLoginUser} user={user} /> : <Login setLoginUser={setLoginUser} />}
              </>
            } />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/postPeep" element={<Home />} />
          <Route path="/seePeep" element={<Seepeeps />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;