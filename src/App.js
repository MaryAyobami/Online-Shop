import { Router } from 'react-router-dom';
import AdminUpload from './components/AdminUpload';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import Refrigerator from './components/Refrigerator';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
    <AppRouter/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
