import { Outlet } from 'react-router-dom';
import './App.css';

const App = () => (
  <div className="App">
    <h1>I WILL ALWAYS BE HERE!</h1>
    <Outlet />
  </div>
);

export default App;
