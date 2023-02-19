import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ProductPage from './pages/productPage';
import OrderPage from './pages/orderPage';
import LoginPage from './pages/loginPage';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const isAuth = Boolean(useSelector((state)=>state.token));

  return (
    

    <div style={{backgroundColor: "#008acb"}}>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/products' element={isAuth ? <ProductPage /> : <Navigate to="/" />} />
          <Route path='/order' element={isAuth ? <OrderPage /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
