import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Outlet />
  </div>
);

export default App;
