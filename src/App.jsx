import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  // function changeFirstNameHandler(event){
  //   // console.log("Printing first name")
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value)
  // }
  // function changeLastNameHandler(event){
  //   // console.log("Printing last name")
  //   // console.log(event.target.value);
  //   setLastName(event.target.value)
  // }

  const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", comments:""});
  console.log(formData)
  
  function changeHandler(event){
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [event.target.name] : event.target.value
      }
    });
  }

  return (
    <div>
      <form action="">
        <input type="text" placeholder='first name' 
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}
        />
        <br />
        <br />
        <input type="text" placeholder='last name'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
        />
        <br />
        <br />
        <input type="email" placeholder='email'
        onChange={changeHandler}
        name='email'
        value={formData.email}
        />
        <br />
        <br />
        <textarea
        placeholder='enter your comments here '
        onChange={changeHandler}
        name='comments'
        value={formData.comments}
        />
      </form>
    </div>
  )
}

export default App
