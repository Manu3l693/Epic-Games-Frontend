import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import './Login.css'

import backgroundImage from '../images/1326038.jpeg'

export const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [message, setMessage] = useState()
    const [errorMessage, setErrorMessage] = useState()
    const [buttonColor, setButtonColor] = useState('0.5')

    const navigate = useNavigate()

    const HandleData = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        setButtonColor('1')
    }

    const HandleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', formData, { withCredentials: true })
            if(response.data.success){
                setMessage(response.data.message)
                setTimeout(() => {
                    navigate('/')
                }, 1000);
            } else{
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
            <div className="Login">
                <div className="login_1">
                    <form action="" onSubmit={HandleFormSubmit}>
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
                                <h2>Login</h2>
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

                                <div className="form_group">
                                    <label htmlFor="">Password</label>
                                    <input 
                                    type="password" 
                                    name="password" 
                                    id="" 
                                    onChange={HandleData}
                                    />
                                </div>
                            </div>

                            <div className="form_button">
                                <button style={{opacity: buttonColor}}>Login</button>
                            </div>

                            <div className="already_have_an_account">
                                <p>Do you want to create an account? </p>
                                <Link to='/signup'>Signup</Link>
                            </div>

                            <div className="error_message">
                                <p style={{color: messageStyle.color1}}>{message}</p>
                                <p style={{color: messageStyle.color2}}>{errorMessage}</p>
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