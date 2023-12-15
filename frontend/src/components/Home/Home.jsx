import React from 'react'
import styles from './Home.module.css'

import { Outlet, Link, useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
  let pathname = location.pathname
  console.log(pathname)
  return (
    <div className="container">
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
          <li>
            <Link to="login">
              <button className={styles.btn}>Login/Signup</button>
            </Link>
          </li>
          <li>Name</li>
          <li>
            <button className={styles.btn}>Logout</button>
          </li>
        </ul>
      </nav>
      {pathname === '/' && (
        <h1 style={{ textAlign: 'center' }}>You are on Home Page</h1>
      )}
      <Outlet />
    </div>
  )
}

export default Home
