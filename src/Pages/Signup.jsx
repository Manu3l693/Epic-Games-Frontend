import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import axios from 'axios'

import './Signup.css'

import backgroundImage from '../images/1326038.jpeg'

export const Signup = () => {
    const [buttonColor, setButtonColor] = useState('0.5')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState([])

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword:'',
        radio: ''
    })

    const navigate = useNavigate()
    
    const HandleData = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        setButtonColor('1')
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', formData)
            if(response.data.success){
                setMessage(response.data.message)
                setTimeout(() => {
                    navigate('/verify')
                }, 1500);
            } else {
                setErrorMessage(response.data.error)
            }
        } catch (error) {
            setErrorMessage(error)
        }
    }

    const messageStyle = {
        color1: 'limegreen',
        color2: 'red',
        margin: '0 .7%'
    }

    return(
        <>
            <div className="signUp">
                <div className="sign_up_1">
                    <form onSubmit={handleFormSubmit} >
                        <div className="form_onSubmit">
                            <div className="go_back">
                                <div className="go_back_1">
                                    <div className="go_back_arrow">
                                        <i class="fa-solid fa-less-than"></i>
                                        <Link to='/'>Back</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="create_an_account_header">
                                <h2>Create Your Account</h2>
                            </div>

                            <div className="form_inputs">
                                <div className="form_group">
                                    <label htmlFor="">Email adress</label>
                                    <input 
                                    type="email" 
                                    name="email" 
                                    id="input" 
                                    onChange={HandleData}
                                    />
                                </div>

                                <div className="form_username">
                                    <div className="form_firstname">
                                        <label htmlFor="">First name</label>
                                        <input 
                                        type="text"
                                        name="firstName"
                                        id="input"
                                        onChange={HandleData}
                                        />
                                    </div>

                                    <div className="form_lastname">
                                        <label htmlFor="">Last name</label>
                                        <input 
                                        type="text" 
                                        name="lastName" 
                                        id="input"
                                        onChange={HandleData} 
                                        />
                                    </div>
                                </div>

                                <div className="form_group">
                                    <label htmlFor="">Password</label>
                                    <input 
                                    type="password" 
                                    name="password" 
                                    id="input"
                                    onChange={HandleData} 
                                    />
                                </div>

                                <div className="form_group">
                                    <label htmlFor="">Confirm password</label>
                                    <input 
                                    type="password" 
                                    name="confirmPassword" 
                                    id="input"
                                    onChange={HandleData} 
                                    />
                                </div>
                            </div>

                            <div className="terms_and_conditions">
                                <input type="checkbox" name="radio" id="" onChange={HandleData} />
                                <p>I have read and agree to the Terms of Service and the Epic Games Store End User License Agreement</p>
                            </div>

                            <div className="form_button">
                                <button style={{opacity: buttonColor}}>Create Account</button>
                            </div>

                            <div className="already_have_an_account">
                                <p>Already have an account? </p>
                                <Link to='/login'>Login</Link>
                            </div>

                            <div className="error_message">
                                <p style={{color: messageStyle.color1}}>{message}</p>
                                {errorMessage.map((error, index) => 
                                    <p style={{color: messageStyle.color2, margin: messageStyle.margin}} key={index}>{error}</p>
                                )}
                            </div>
                        </div>
                    </form>
                </div>

                <div className="background_wallpaper">
                    <img src={backgroundImage} alt="" />
                </div>
            </div>
        </>
    )
}