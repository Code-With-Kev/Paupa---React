import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import './RegistrationForm.css'
import BubbleCollection from './BubbleCollection'

const RegistrationForm = (props) => {
    const [formInfo, setFormInfo] = useState({
        username: "",
        email:"",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
    });
    const history = useHistory()
    const [errors, setErrors] = useState([])

    const handleChange = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }
    const handleRegSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", formInfo, {withCredentials:true})
            .then(res=>{
                console.log(res)
                if(res.data.errors){
                    setErrors(res.data.errors)
                    console.log(res)
                }else{
                    history.push('/')
                }
            })
            .catch(err=> {
                console.log(err)
            }, [errors])
            
            setFormInfo({
                username: "",
                email:"",
                confirmEmail: "",
                password: "",
                confirmPassword: "",
            })
        }

    return (
        <div>
            <form onSubmit={handleRegSubmit}> 
                <div>
                    {errors.username?.message && <div className="error">{errors.username.message}</div>}
                    {errors.email?.message && <div className="error">{errors.email.message}</div>}
                    {errors.password?.message && <div className="error">{errors.password.message}</div>}
                    {errors.confirmEmail?.message && <div className="error">{errors.confirmEmail.message}</div>}
                    {errors.confirmPassword?.message && <div className="error">{errors.confirmPassword.message}</div>}
                    <div className='first-bubble'>
                        <BubbleCollection label="Username:" value={formInfo.username} handleChange={handleChange} type="text" name="username"/>
                    </div>
                    <div className='second-bubble'>
                        <BubbleCollection label="Email:" value={formInfo.email} handleChange={handleChange} type="email" name="email"/>
                    </div>
                    <div className='third-bubble'>
                        <BubbleCollection label="Confirm Email:" value={formInfo.confirmEmail} handleChange={handleChange} type="email" name="confirmEmail" />
                    </div>
                    <div className='fourth-bubble'>
                        <BubbleCollection label="Password:" value={formInfo.password} handleChange={handleChange} type="password" name="password" />
                    </div>
                    <div className='fifth-bubble'>
                        <BubbleCollection label="Confirm Password:" value={formInfo.confirmPassword} handleChange={handleChange} type="password" name="confirmPassword" />
                    </div>
                    <div className='submit-bubble-btn'>
                        <div className="bubble-username">
                            <div className="reg-section username">
                                <input type="submit" value="Sign Up" className="sub-btn" style={{boxShadow: "0px 0px 0px white"}}/>
                            </div>
                            <img className="bubble1" src={require('../UI/Images/bubble.png')} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm
