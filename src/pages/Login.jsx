import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo } from '../components';

const Login = () => {
  
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type='email' name='email' labelText='Email' defaultValue='john@gmail.com' />
    </form>
    </Wrapper>
  )
  
}

export default Login
