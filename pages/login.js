import {useLogin} from '../components/CustomHooks';
import Router from 'next/router'
import '../css/index.css';
import '../css/login.css';
import Link from 'next/link'


const Login = (props) => {

  const login = (message) => {
    if(message.firstName == undefined){
      alert(message);
    }else{
      Router.push({
        pathname: '/',
        query: {user: JSON.stringify(message)},
      },'/hello');
    }
  }

  const {inputs, handleLogin, handleInputChange} = useLogin(login);
  return <div className="login">
    <h2 className="header">Exploration</h2>
    <div className="wrapper">
    <form onSubmit={handleLogin}>
      <label>Username</label>
      <input className="text" type="text" name="username" onChange={handleInputChange} value={inputs.username} required />
      
      <label>Password</label>
      <input className="text" type="password" name="password" onChange={handleInputChange} value={inputs.password} required />
 
      <input className="button" type="submit" value="Login" />
        <Link href="/signup"><a className="button">Sign Up</a></Link>
    </form>
    
  </div>
  </div>
};

export default Login;