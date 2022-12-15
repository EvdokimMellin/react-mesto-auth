import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

function Register (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function handleChange (evt) {
    evt.target.name === 'email' ? setEmail(evt.target.value) : setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    props.onRegister(email, password)
    history.push('/sign-in')
  }

  return (
    <main className='auth'>
      <h1 className='auth__title'>Регистрация</h1>
      <form className='auth__form' onSubmit={handleSubmit}>
        <input className='auth__input auth__input_type_email' placeholder='Email' name="email" type="email" autoComplete='off' onChange={handleChange}></input>
        <input className='auth__input auth__input_type_password' placeholder='Пароль' name="password" type="password" autoComplete='off' onChange={handleChange}></input>
        <button className='auth__button'>Зарегистрироваться</button>
      </form>
      <Link to="/sign-in" className='auth__login-link'>Уже зарегистрированы? Войти</Link>
    </main>
  )
}

export default Register;
