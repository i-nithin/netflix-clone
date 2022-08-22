import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import HomePage from '../src/pages/HomePage'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'
import Account from '../src/pages/Account'
import { auth, onAuthStateChanged } from './firebase'
import { login, logout, selectUser } from './features/userSlice'
import { useDispatch, useSelector } from 'react-redux'


const App = () => {


  const user = useSelector(selectUser);
  const dispatch = useDispatch();

// check at page load if a user is authenticated
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            password : userAuth.password,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => {}
  });

  return (
    <>
    <Navbar user = { user }/>
    <Routes>
      <Route path='/' element = {<HomePage />} />
      <Route path='/login' element = { <Login /> } />
      <Route path='/signup' element = { <Signup /> } />
      <Route path='/account' element = { <Account />} />
    </Routes>
    </>
  )
}

export default App