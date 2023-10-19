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

  const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", comments:"", isVisible:true, mode:"", favCar:""});
  // console.log(formData)
  
  function changeHandler(event){
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name] : type==="checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("Finally printing all the data of the form")
    console.log(formData)
  }

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
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
        <br />
        <br />
        <input type="checkbox" 
        onChange={changeHandler}
        name='isVisible'
        id='isVisible'
        checked={formData.isVisible}
        />

        <label htmlFor="isVisible">Am I visible ?</label>

        <br />
        <br />

        <fieldset>
          <legend>Mode:</legend>
        <input 
        type="radio"
        onChange={changeHandler}
        name='mode'
        value="Online-Mode"
        id='Online-Mode'
        checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor="Online-Mode">Online-Mode</label>
        
        <br />
        <br />

        <input 
        type="radio"
        onChange={changeHandler}
        name='mode'
        value="Offline-Mode"
        id='Offline-Mode'
        checked={formData.mode === "Offline-Mode"}
        />
        <label htmlFor="Offline-Mode">Offline-Mode</label>
        </fieldset>

        <label htmlFor="favCar">Tell me your favourite car</label>
        <select 
        name="favCar"
        onChange={changeHandler}
        id="favCar"
        value={formData.favCar}
        >
          <option value="scarpio">Scarpio</option>
          <option value="fartuner">Fartuner</option>
          <option value="tharrr">Tharrr</option>
          <option value="legendrr">legendrr</option>
          <option value="dafenter">Dafender</option>
        </select>

        <br />
        <br />

        <button>Submit</button>


      </form>
    </div>
  )
}

export default App
