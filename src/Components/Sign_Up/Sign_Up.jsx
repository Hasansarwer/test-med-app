import { Link } from "react-router-dom";    // Importing Link from react-router-dom
import './Sign_Up.css';                     // Importing Sign_Up.css file
import { useState } from 'react';            // Importing useState from react

const Sign_Up = () => { 
    const [formData, setFormData] = useState({name: '', phone: '', email: '', password: ''});    // Initializing formData state variable with name, phone, email, password
    const [errors, setErrors] = useState({name: '', phone: '', email: '', password: ''});         // Initializing errors state variable with name, phone, email, password

    const validateForm = () => {    // Defining validateForm function
        let formIsValid = true;     // Initializing formIsValid variable with true
        const newErrors = {name: '', phone: '', email: '', password: ''};    // Initializing newErrors variable with name, phone, email, password

        if (!formData.name) {    // If name is empty
            formIsValid = false;    // Set formIsValid to false
            newErrors.name = 'Name is required.';    // Set newErrors.name to 'Name is required.'
        }

        if (!formData.phone) {    // If phone is empty
            formIsValid = false;    // Set formIsValid to false
            newErrors.phone = 'Phone is required.';    // Set newErrors.phone to 'Phone is required.'
        } else if (!/^\d{10}$/.test(formData.phone)) {    // If phone is not exactly 10 digits
            formIsValid = false;    // Set formIsValid to false
            newErrors.phone = 'Phone number must be exactly 10 digits.';    // Set newErrors.phone to 'Phone number must be exactly 10 digits.'
        }

        if (!formData.email) {    // If email is empty
            formIsValid = false;    // Set formIsValid to false
            newErrors.email = 'Email is required.';    // Set newErrors.email to 'Email is required.'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {    // If email is not in email format
            formIsValid = false;    // Set formIsValid to false
            newErrors.email = 'Email is invalid.';    // Set newErrors.email to 'Email is invalid.'
        }

        if (!formData.password) {    // If password is empty
            formIsValid = false;    // Set formIsValid to false
            newErrors.password = 'Password is required.';    // Set newErrors.password to 'Password is required.'
        } else if (formData.password.length < 6) {    // If password length is less than 6
            formIsValid = false;    // Set formIsValid to false
            newErrors.password = 'Password must be at least 6 characters long.';    // Set newErrors.password to 'Password must be at least 6 characters long.'
        }

        setErrors(newErrors);    // Set errors to newErrors
        return formIsValid;    // Return formIsValid
    }

  

    const handleSubmit = (e) => {    // Defining handleSubmit function
        e.preventDefault();    // Preventing default form submission
        if (validateForm()) {    // If validateForm returns true
            console.log('Valid Form');    // Log 'Valid Form'
        } else {    // If validateForm returns false
            console.log('Invalid Form');    // Log 'Invalid Form'
        }
    }

    const updateData = (prevData, e) =>{
        return {
            ...prevData,
            [e.target.name]: e.target.value
        }
    }
    return (
        <div className="container" style={{marginTop: '5%'}}> 
        <div className="signup-grid"> 
            <div className="signup-text"> 
                <h1>Sign Up</h1>
            </div>
            <div className="signup-text1" style={{textAlign: 'left'}}> 
                Already a member? <span><Link to="/login" style={{color: '#2190FF'}}> Login</Link></span>
            </div>
            <div className="signup-form"> 
                <form onSubmit={handleSubmit}> 

                    <div className="form-group"> 
                        <label htmlFor="name">Name</label> 
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            required 
                            className="form-control" 
                            placeholder="Enter your name" 
                            aria-describedby="helpId" 
                            value={formData.name}
                            onChange={(e) => setFormData(updateData(formData, e))}
                            /> 
                            {errors.name && <div className="text-danger">{errors.name}</div>}
                    </div>

                    <div className="form-group"> 
                        <label htmlFor="phone">Phone</label> 
                        <input 
                            type="tel" 
                            name="phone" 
                            id="phone" 
                            required 
                            className="form-control" 
                            placeholder="Enter your phone number" 
                            aria-describedby="helpId" 
                            value={formData.phone}
                            onChange={(e) => setFormData(updateData(formData, e))}
                            /> 
                            {errors.phone && <div className="text-danger">{errors.phone}</div>}
                    </div>

                    <div className="form-group"> 
                        <label htmlFor="email">Email</label>                         
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            required 
                            className="form-control" 
                            placeholder="Enter your email" 
                            aria-describedby="helpId" 
                            value={formData.email}
                            onChange={(e) => setFormData(updateData(formData, e))}
                            /> 
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>

                    <div className="form-group"> 
                        <label htmlFor="password">Password</label> 
                        <input 
                            name="password" 
                            type="password"
                            id="password"   
                            required 
                            className="form-control" 
                            placeholder="Enter your password" 
                            aria-describedby="helpId"
                            value={formData.password}
                            onChange={(e) => setFormData(updateData(formData, e))}
                             /> 
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>

                    <div className="btn-group"> 
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button> 
                        <button 
                            type="reset" 
                            className="btn btn-danger mb-2 waves-effect waves-light"
                            onClick={() => {
                                setFormData({name: '', phone: '', email: '', password: ''});
                                setErrors({name: '', phone: '', email: '', password: ''});
                            }}
                            >Reset</button> 
                    </div>
                </form> 
            </div>
        </div>
    </div>
    )
}

export default Sign_Up;    // Exporting Sign_Up component