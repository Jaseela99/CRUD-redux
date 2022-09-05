import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button'
import TextField from '../../Components/TextField'

const AddUser = () => {
    const navigate=useNavigate()
    const [values,setValues]=React.useState({
        name:"",
        email:""
    })
    const handleAddUser=()=>{
       setValues({name:"",email:""})
       navigate("/")
    }
  return (
    <div className='mt-10 max-w-xl mx-auto'>
     <TextField
     label="Name"
     inputProps={{type:"text",placeholder:"jane"}}
     value={values.name}
     onChange={(e)=>setValues({...values,name:e.target.value})}

     />
     <br/>
     <TextField
     label="Email"
     inputProps={{type:"email",placeholder:"jane@mail.com"}}
     value={values.email}
     onChange={(e)=>setValues({...values,email:e.target.value})}
     />
     <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser