import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
const initialForm = {
  username: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleChange = (e) => {
    let { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleClick = async () => {
    try {
      await axios.post(
        "https://portfolio-react-proyects.vercel.app/api/login",
        form
      );
      router.push("/admin");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          name="username"
          placeholder="username"
          className={styles.input}
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={handleChange}
        />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default Login;
