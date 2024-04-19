import { Box } from '@mui/material';
import './assets/style/main.css'
import Dashboard from './pages/home/Dashboard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
    </Routes>
  );
}

export default App;
