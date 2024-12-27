import { Link } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      formIsValid = false;
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      newErrors.email = 'Email is invalid.';
    }

    //password validation
    if (!password) {
      formIsValid = false;
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      formIsValid = false;
      newErrors.password = 'Password must be at least 6 characters long.';
    }

    setErrors(newErrors);
    return formIsValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Valid Form');
    } else {
      console.log('Invalid Form');
    }
  }
    return (
        <div className="container">
    
        <div className="login-grid">
       
          <div className="login-text">
            <h2>Login</h2>
          </div>
         
          <div className="login-text">
            Are you a new member? <span><Link to='/signup' style={{color: '#2190FF'}}> Sign Up Here</Link></span>
          </div>
          <br />
        
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="form-control" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="helpId" />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <span className="text-danger">{errors.password}</span>}
              </div>
             
              <div className="btn-group">
                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
                >Login</button> 
                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light"
                    onClick={() => {
                      setEmail('');
                      setPassword('');
                      setErrors({ email: '', password: '' });
                    }}
                    >Reset
                </button>
              </div>
              <br />
             
              <div className="login-text">
                Forgot Password?
              </div>
            </form>
          </div>
        </div>
      </div>
    )};

    export default Login