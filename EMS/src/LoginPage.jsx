import React from "react";
import  useState  from "react";
import { useForm } from "react-hook-form";
import "./App.css"
import { Title, Input, Button} from '@mantine/core';
import axios, { Axios } from "axios";



function LoginPage() {

  const [formData,setFormData] = React.useState({
    password:"", email:""
  })
    
   function handleChange(event) {
    const {name, value}=event.target
    setFormData(prevFormData =>{
      return{
        ...prevFormData, [name]:value
      }
    })
   }



  //const { register, handleSubmit } = useForm();
  //const submit =data=>console.log(data)

  function handleSubmit(event) {
    event.preventDefault()
    axios.post('http://localhost:9000').then(
      console.log(result=>console.log(result)))
    .catch(error=>console.log(error)
    )}



  return (
   
    <div className="h-screen flex justify-center  items-center bg-gray-100  text-txt-main">

    <div className="bg-white rounded-lg p-4 w-1/4">
    <Title className="flex justify-center mb-[20px] mt-[40px]" order={1}>Login Page</Title>

    <form action="submit" onSubmit={handleSubmit}>

    <label 
    htmlFor="email">
    E-mail
    </label>
    <Input 
    value={formData.email}
     name="email"
      label="E-mail" 
      description="Admins email" 
      placeholder="enter your email" 
      onChange={handleChange}
      />


    <label htmlFor="name">Password</label>
    <Input 
    type="password"
    value={formData.password} 
    name="password" 
    description="Admins password" 
    placeholder="enter your password"
    onChange={handleChange}
    />


    


    <Button className="flex justify-center mt-2 txt-main">Log in</Button>
    </form>

    </div>
    </div>
  )
  }

export default LoginPage