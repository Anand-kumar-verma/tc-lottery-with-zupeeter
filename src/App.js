import { Box } from '@mui/material';
import './assets/style/main.css'
import Dashboard from './pages/home/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Activity from './pages/activity/Activity';
import Wingo from './pages/wingo/Wingo';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/activity' element={<Activity />}></Route>
      <Route path='/wingo' element={<Wingo />}></Route>
    </Routes>
  );
}

export default App;
