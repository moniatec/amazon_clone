import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = event => {
        event.preventDefault();//to stop the refresh
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(e => alert(e.message))
    }

    const register = event => {
        event.preventDefault();//to stop the refresh
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {

            })
            .catch(e => alert(e.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://s-i.huffpost.com/gen/1148926/images/o-CLASSIC-BOOKS-ORIGINAL-COVERS-facebook.jpg'
                    alt=''
                />
            </Link>
            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type='email' />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type='password' />
                    <button onClick={login} type="submit" className='login__signInButton'>Sign In</button>
                    <p>
                        By continuing, you agree to Amazon's Conditions of Use and Privacy
                        Notice. Need help?
				    </p>
                    <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
                </form>
            </div>

        </div>
    )
}

export default Login
