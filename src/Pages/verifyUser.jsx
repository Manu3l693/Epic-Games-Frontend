import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './verifyUser.css'

import backgroundImage from '../images/1326038.jpeg'

export const VerifyUser = () => {

    const [formData, setFormData] = useState({
        code: ''
    })

    const [message, setMessage] = useState()
    const [errorMessage, setErrorMessage] = useState()
    const [buttonColor, setButtonColor] = useState('0.5')
    const navigate = useNavigate()

    const HandleCode = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        setButtonColor('1')
    }

    const HandleSubmitCode = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:5000/api/auth/verify', formData)
            if(response.data.success){
                setMessage(response.data.message)
                setTimeout(() => {
                    navigate('/login')
                }, 1500);
            } else{
                setErrorMessage(response.data.error)
            }
        } catch (error) {
            setErrorMessage(`Something went wrong: ${error}`)
        }

    }


    const messageStyle = {
        color1: 'limegreen',
        color2: 'red',
    }

    return(
        <>
            <div className="verifyUser">
                <div className="verifyUser_1">
                    <form onSubmit={HandleSubmitCode}>
                        <div className="form_inputs_content">
                            <div className="verify_header">
                                <div className="verify_header_1">
                                    <h2>Verify Account</h2>
                                    <p>A verification code has been sent to your email address</p>
                                </div>
                            </div>

                            <div className="form_groups">
                                <div className="form_group">
                                    <input 
                                    type="text" 
                                    name='code'
                                    onChange={HandleCode}
                                    />
                                </div>

                            </div>

                            <div className="verify_button">
                                <button style={{opacity: buttonColor}}>Submit</button>
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