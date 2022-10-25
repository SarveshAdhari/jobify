import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { FormRow, Logo, Alert } from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"
import { useAppContext } from "../context/appContext"

const initialState = {
  name:"",
  email:"",
  password:"",
  isMember: true,
}

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  
  const {user, isLoading, showAlert, displayAlert, registerUser, loginUser} = useAppContext()

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember})
  }

  const handleChange =(e) => {
    setValues({...values, [e.target.name]:e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const {name , email, password, isMember} = values
    if(!email || !password || (!isMember && !name)){
      displayAlert()
      return
    } 

    const currentUser = {name,email,password}
    if(isMember){
      loginUser(currentUser)
    }
    else{
      registerUser(currentUser)
    }
  }

  useEffect(()=>{
    if(user){
      setTimeout(()=>{
        navigate('/')
      },3000)
    }
  },[user, navigate])

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Signup'}</h3>
        {showAlert && <Alert />}
        
        {/* Name Field */}
        {!values.isMember && 
        <FormRow 
        type="text" 
        name="name" 
        value={values.name} 
        handleChange={handleChange}
        labelText="name"
        />}

        <FormRow 
        type="email" 
        name="email" 
        value={values.email} 
        handleChange={handleChange}
        labelText="email"
        />

        {/* Password Field */}
        <FormRow 
        type="password" 
        name="password" 
        value={values.password} 
        handleChange={handleChange}
        labelText="password"
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {values.isMember ? 'Login' : 'Signup'}
        </button>
        <p>
          {values.isMember ? 'Not a member?' : 'Already a member?'}
          <button 
          type="button" 
          onClick={toggleMember} 
          className='member-btn'
          >
            {values.isMember ? 'Signup' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register