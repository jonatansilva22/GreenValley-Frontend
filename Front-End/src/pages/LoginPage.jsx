import React from 'react';
import './LoginPage.css'; // Archivo CSS para estilos
import Logo from '/src/assets/img/Logo.png';
import UserIcon from '/src/assets/img/user-solid.svg';
import KeyIcon from '/src/assets/img/key-solid.svg';
import LoginIcon from '/src/assets/img/right-to-bracket-solid.svg';

function LoginPage() {
  return (
    <div className="login-page">
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
       <input className='email-input' type="text" placeholder='Ingrese correo electrónico' /> 
       <p className="password-text">Contraseña:</p>
       <input className='password-input' type="password" placeholder='Ingrese contraseña' /> 
       <button className='login-button'>Ingresar</button>
            <div className="vertical-line5"></div>
            <div className="vertical-line6"></div>
            <div className="vertical-line7"></div>
        </div>
    </div>
  );
}

export default LoginPage;
