import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Profile from './Components/Profile'
import Error from './Components/Error'
import Login from './Components/Login'
import ProtectedRoutes from './ProtectedRoutes';
import Account from './Components/Account';
import './App.css';

function App() {
  return (
    <Router>
      <div className='body'>
        <nav className='nav'>
          <Link className='nav-link' to='/home' >Home</Link>
          <Link className='nav-link' to='/about' >About</Link>
          <Link className='nav-link' to='/profile' >Profile</Link>
        </nav>
        <Routes>
          <Route index element={<Login />} />
          {/* <Route element={<ProtectedRoutes/>}> */}
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/account' element={<Account/>} />
          <Route path='/profile' element={<div>
            <h1>WELCOME TO THE PROFILE PAGE</h1>
            <Outlet />
          </div>}>
            <Route path=':id' element={<Profile />} />
          </Route>
          <Route path='*' element={<Error />} />
          {/* </Route> */}
        </Routes>
        <div>
          <p>Training 2022</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
