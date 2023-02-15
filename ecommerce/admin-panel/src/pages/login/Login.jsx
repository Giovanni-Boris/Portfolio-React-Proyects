import "./Login.css";
import {useState} from 'react';

const initialState ={
  username:"",
  password:"",
}
const Login = () => {
  const [form, setForm] = useState(initialState);
  const handleChange = (e)=>{
    let {name,value} = e.target;
    setForm({
      ...form,
      [name]:value,
    });
  };
  const handleClick=()=>{
    //
  }
  return (
    <div className="login">
      <input type="text" placeholder="username" onChange={handleChange} />
      <input type="password" placeholder="password" onChange={handleChange} />
      <button onClick={handleClick}>Login</button>
    </div
  );
};

export default Login;
