import styles from "@/styles/Auth.module.scss";
import Image from "next/image";
import { BiUser, BiLockAlt } from "react-icons/bi";
import { IconContext } from "react-icons";
const SignIn = () => {
  return (
    <div className={styles["authWrapper"]}>
      <div className={styles["leftSection"]}>
        <Image
          src="/assets/auth.jpg"
          alt="can't load image"
          width={500}
          height={500}
          layout={"intrinsic"}
        />
      </div>
      <div className={styles["rightSection"]}>
        <h3>Login</h3>
        <p>Welcome back , please login to your account</p>
        <IconContext.Provider value={{ color: "#FF460C", size: "20px" }}>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="email">Email</label>
            <div>
              <BiUser size="20px" className="icon" />
              <input type="text" id="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="password">Password</label>
            <div>
              <BiLockAlt className="icon" />
              <input
                type="password"
                id="password"
                placeholder="Enter password"
              />
            </div>
          </div>
        </IconContext.Provider>
        <div className={styles["actions"]}>
          <span>
            <input type="checkbox" name="remeber" />
            &nbsp;Remeber&nbsp;me
          </span>
          <span className={styles["forgotPass"]}>Forgot&nbsp;password?</span>
        </div>
        <button className={`btn ${styles["login-btn"]}`}>Login</button>
      </div>
    </div>
  );
};

export default SignIn;
