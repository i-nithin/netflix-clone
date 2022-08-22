import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../features/userSlice'

const Navbar = ( { user } ) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = async() => {
    try {
      dispatch(logout())
      navigate('/')
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <Link to = "/">
      <h1 className = 'text-red-600 text-4xl font-bold cursor-pointer' >NETFLIX</h1>
      </Link>
        {
          user? (
            <div>
          <Link to ="/account">
              <button className='text-white pr-4'>Account</button>
          </Link>
            <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded text-white'>Log out</button>        
        </div>
          ) : (
            <div>
            <Link to ="/login">
                <button className='text-white pr-4'>Sign In</button>
            </Link>
              
              <Link to ="/signup">
              <button className='bg-red-600 px-6 py-2 rounded text-white'>Sign Up</button> 
              </Link>            
          </div>
          )
        }
    </div>
  )
}

export default Navbar