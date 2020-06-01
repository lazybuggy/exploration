import {useSignUpForm} from '../components/CustomHooks';
import Router from 'next/router';
import '../css/index.css';
import './../css/signup.css';
import Link from 'next/link';

const Signup = (props) => {

  const signup = (message) => {
    if(message.firstName == undefined){
      alert(message);
    }else{
      Router.push('/login');
    }
  }

  const {inputs, handleSubmit, handleInputChange} = useSignUpForm(signup);
  return <div className="signup">
    <h2 className="header">Welcome to Exploration</h2>
    <div className="wrapper">
    <form onSubmit={handleSubmit}>
      <label>First Name</label>
      <input className="text" type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
      
      <label>Last Name</label>
        <input className="text" type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />

      <label>Username</label>
        <input className="text" type="text" name="username" onChange={handleInputChange} value={inputs.username} required />
      
      <label>Password</label>
        <input className="text" type="password" name="password1" onChange={handleInputChange} value={inputs.password1} required />

      <label>Confirm Password</label>
        <input className="text" type="password" name="password2" onChange={handleInputChange} value={inputs.password2} required />

      <input className="button" type="submit" value="Sign up!"/>
        <Link href="/login"><a className="button">Login</a></Link>
    </form>
    </div>
  </div>
};

export default Signup;