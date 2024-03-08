import styles from "../styles/form.module.css";

function Form() {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form>
          <div className={styles.userBox}>
            <input type="text" name="" />
            <label>Username</label>
          </div>
          <div className={styles.userBox}>
            <input type="password" name="" />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
}

export default Form;
