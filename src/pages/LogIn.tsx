import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn} from '../state/LogInSlice';
import './styles/logInStyles.css'

function LogIn() {

    const { user } = useSelector((state) => state.loggedIn);
    const dispatch = useDispatch()


    const logInUser = () => {
      dispatch(logIn({user:true}))
    }

  return (
    <div className='main-logIn'>
        <div className='title'>LogIn to start looking for the list of pokemons</div>
        <div>
            <button className='button-login' onClick={logInUser}>LogIn</button>
        </div>
    </div>
  )
}

export default LogIn