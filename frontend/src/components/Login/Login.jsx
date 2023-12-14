import styles from './Login.module.css'
const Login = () => {
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
