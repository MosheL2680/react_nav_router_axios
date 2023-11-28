import './App.css';
import { Outlet } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import NavBar from './NavBar';
import Footer from './Footer';
import Notify from './Notify';

function App() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Notify/>
      <Footer/>
    </div>
  );
}

export default App;
