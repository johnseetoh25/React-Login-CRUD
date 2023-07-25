import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login-page/login-page';
import HomePage from './pages/home-page/home-page';
import Dashboard from './pages/dashboard/dashboard';
import AddDataPage from './pages/add-data-page/add-data-page'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='add-data' element={<AddDataPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
