import { useReducer, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Login.module.css'

// for state management we would be using useReducer

let initalState = {
  name: 'xyz',
  email: 'xyz@gmail.com',
  password: 'xyz',
  location: 'xyz',
}

function reducerFn(state, action) {
  switch (action.type) {
    case 'name': {
      return {
        ...state,
        name: action.value,
      }
    }
    case 'email': {
      return {
        ...state,
        email: action.value,
      }
    }
    case 'password': {
      return {
        ...state,
        password: action.value,
      }
    }
    case 'location':
      {
        return {
          ...state,
          location: action.value,
        }
      }
      throw Error('Undefined Acion type' + action.type)
  }
}

const Login = () => {
  const [state, dispatch] = useReducer(reducerFn, initalState)
  const [isLogin, setIsLogin] = useState(true)

  const location = useLocation()
  const navigate = useNavigate()

  function changeHandler(type, value) {
    console.log(type, value)
    switch (type) {
      case 'name':
        dispatch({ type: 'name', value })
      case 'email':
        dispatch({ type: 'email', value })
      case 'password':
        dispatch({ type: 'password', value })
      case 'location':
        dispatch({ type: 'location', value })
    }
  }

  function loginChangeHandler() {
    setIsLogin((prev) => !prev)
  }

  const submitHandler = async (e) => {
    // ? submit handler
    e.preventDefault()

    console.log(state)

    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    console.log(data)

    if (!data.success) {
      alert(data.message)
      return
    }

    alert(data.data)
    setIsLogin((prev) => !prev)
  }

  return (
    <div className={styles.form}>
      <form onSubmit={submitHandler}>
        {!isLogin && (
          <div className={styles.container}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              className={styles.input}
              type="text"
              id="name"
              placeholder="Full Name.."
              onChange={(e) => changeHandler('name', e.target.value)}
            />
          </div>
        )}
        <div className={styles.container}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            type="text"
            id="email"
            placeholder="email"
            onChange={(e) => changeHandler('email', e.target.value)}
          />
        </div>
        <div className={styles.container}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => changeHandler('password', e.target.value)}
          />
        </div>
        {!isLogin && (
          <div className={styles.container}>
            <label className={styles.label} htmlFor="Location">
              Location
            </label>
            <input
              className={styles.input}
              type="text"
              id="Location"
              placeholder="location"
              onChange={(e) => changeHandler('location', e.target.value)}
            />
          </div>
        )}
        <div className={styles.container}>
          <input
            type="submit"
            value={isLogin ? 'Login' : 'Signup'}
            className={styles.submit}
          />
        </div>
      </form>
      <p>
        {isLogin ? (
          <button
            onClick={() => {
              setIsLogin((prev) => !prev)
              navigate('/login')
            }}
          >
            Create Account? Sign up
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLogin((prev) => !prev)
              navigate('/login')
            }}
          >
            Already User? Login
          </button>
        )}
      </p>
    </div>
  )
}
export default Login

/*

        
/welcome page
    -> Show all page (if authenticated) 
            ->redirect to <Post/> components
    if(not authenticated)   
        -> redirect to Login/Signup


*/
