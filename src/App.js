import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import RegisterLoginPage from './components/pages/RegisterLoginPage';
import HomePage from './components/pages/HomePage';
import ForgotpasswordPage from './components/pages/ForgotpasswordPage';
import DatacomplementaryPage from './components/pages/DatacomplementaryPage';
import { AuthProvider, AuthContext} from './components/contexts/auth';


function App() {

  const Private = ({children})=>{
    const {authenticated, loading} = useContext(AuthContext);

    if(loading){
      return <div className='loading'>Carregando...</div>
    }

    if(!authenticated){
      return <Navigate to='/'/>
    }

    return children;
  }

  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Routes>
            <Route exact path='/' element={<LoginPage/>}/>
            <Route path='/registerlogin' element={<RegisterLoginPage/>}/>
            <Route path='/redefinirsenha' element={<ForgotpasswordPage />}/>
            <Route path='/home' element={<Private><HomePage/></Private>}/>
            <Route path='/home/dadospessoais' element={<Private><RegisterPage/></Private>}/>
            <Route path='/home/dadoscomplementares' element={<Private><DatacomplementaryPage/></Private>}/>
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
