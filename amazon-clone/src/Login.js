import React from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
function Login() {
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
                    <h5>Email</h5>
                    <input type='text' />
                    <h5>Password</h5>
                    <input type='text' />
                    <button>Sign In</button>
                    <p>
                        By continuing, you agree to Amazon's Conditions of Use and Privacy
                        Notice. Need help?
				    </p>
                    <button>Create your Amazon Account</button>
                </form>
            </div>

        </div>
    )
}

export default Login
