import React from 'react';
import { useDispatch, useSelector } from 'react-redux' 
import { toggleTheme } from '../Actions/loginActions';

const Theme = () => {
    const theme =  useSelector(state => state.login.theme);
    const dispatch = useDispatch()

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
        <p>The current theme is {theme}</p>
        <button onClick={() => dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'))}>Change Theme</button>
    </div>
  )
}


export default Theme