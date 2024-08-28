import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './Actions/loginActions'
import {useSelector, useDispatch } from 'react-redux';

const LoginUser = () => {

    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const dispatch = useDispatch()

    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetails);
        dispatch(loginUser());
    }

    useEffect(() => {
        if(isLoggedIn){
            navigate('/home')
        }
    }, [isLoggedIn, navigate])


  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <label htmlFor="email">Email</label>
                <input 
                    type='email'
                    name='email'
                    value={userDetails.email}
                    placeholder="Enter email"
                    onChange={handleChange}
                />
            <br />

            <label htmlFor="password">Password</label>
            <input 
                type='password'
                name="password"
                value={userDetails.password}
                placeholder="Enter your password"
                onChange={handleChange}
            />
            <br />
            <button disabled={!userDetails.email || !userDetails.password}>Submit</button>
        </form>
    </div>
  )
}

export default LoginUser