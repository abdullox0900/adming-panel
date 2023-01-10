import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Home from './Pages/Home/Home';
import Login from './Pages/login/login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;