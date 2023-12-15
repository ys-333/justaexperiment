import styles from './Login.module.css'

import { useReducer } from 'react'

// for state management we would be using useReducer

const initalState = {
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
        name: action.value,
      }
    }
    case 'password': {
      return {
        ...state,
        name: action.value,
      }
    }
    case 'location':
      {
        return {
          ...state,
          name: action.value,
        }
      }
      throw Error('Undefined Acion type' + action.type)
  }
}

const Login = () => {
  const [state, dispatch] = useReducer()

  function changeHandler(type, value) {
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

  const submitHandler = () => {
    // ? submit handler
  }

  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          className={styles.input}
          type="text"
          id="name"
          placeholder="Full Name.."
        />
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          type="text"
          id="email"
          placeholder="email"
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
        />
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="Location">
          Location
        </label>
        <input
          className={styles.input}
          type="text"
          id="Location"
          placeholder="location"
        />
      </div>
      <div className={styles.container}>
        <input type="submit" value="Submit" className={styles.submit} />
      </div>
    </form>
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
