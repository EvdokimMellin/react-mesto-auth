import React, { useState } from 'react';

function Login (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange (evt) {
    evt.target.name === 'email' ? setEmail(evt.target.value) : setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    props.onLogin(email, password)
  }

  return (
    <main className='auth'>
      <h1 className='auth__title'>Вход</h1>
      <form className='auth__form' onSubmit={handleSubmit}>
        <input className='auth__input auth__input_type_email' name='email' placeholder='Email' type="email" autoComplete='on' onChange={handleChange}></input>
        <input className='auth__input auth__input_type_password' name='password' placeholder='Пароль' type="password" autoComplete='on' onChange={handleChange}></input>
        <button className='auth__button'>Войти</button>
      </form>
    </main>
  )
}

export default Login;
