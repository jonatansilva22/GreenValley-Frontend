import React, { useState } from 'react';
import './LoginPage.css'; 
import Logo from '/src/assets/img/Logo.png';
import UserIcon from '/src/assets/img/user-solid.svg';
import KeyIcon from '/src/assets/img/key-solid.svg';
import LoginIcon from '/src/assets/img/right-to-bracket-solid.svg';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  //Aqui se va reemplazar por el fetch (con axios) al backend
  const handleLogin = () => {
    if (email !== 'correo@mail.com' || password !== 'pass') {
      setErrorMessage('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      setEmail('');
      setPassword('');
    } else {
      navigate('/menu');
    }
  };

  return (
    <div className="login-page">
      {/* Contenido del login */}
      <div className="square-left">
        <img src={Logo} alt="Slowpitch Green Valley Logo" /> 
        <p className="image-text">Venta de artículos para Slowpitch: <br />
        Guantes, guanteletas, bats, <br />
        mochilas, cleats.</p> 
        <div className="vertical-line1"></div>
        <div className="vertical-line2"></div>
        <div className="vertical-line3"></div>
        <div className="vertical-line4"></div>
      </div>
      <img className="login-icon" src={LoginIcon} alt="Login Icon"  />
      <img className="user-icon" src={UserIcon} alt="User Icon"  />
      <img className="key-icon" src={KeyIcon} alt="Key Icon"  />
      <div className="square-right">
        <p className="login-text">Inicio de sesión</p>
        <p className="email-text">Correo electrónico:</p>
        <input 
          className='email-input' 
          type="text" 
          placeholder='Ingrese correo electrónico' 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        /> 
        <p className="password-text">Contraseña:</p>
        <input 
          className='password-input' 
          type="password" 
          placeholder='Ingrese contraseña' 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        /> 
        <button className='login-button' onClick={handleLogin}>Ingresar</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="vertical-line5"></div>
        <div className="vertical-line6"></div>
        <div className="vertical-line7"></div>
      </div>
    </div>
  );
}

export default LoginPage;
