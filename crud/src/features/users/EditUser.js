import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate,useParams} from 'react-router-dom'
import Button from '../../Components/Button'
import TextField from '../../Components/TextField'
import { editUser } from './userSlice'
const EditUser = () => {
  const dispatch = useDispatch()
  const users=useSelector(store=>store.users)
  const params=useParams()
  const existingUser=users.filter(user=>user.id===params.id)
  const {name,email}=existingUser[0]
    const navigate=useNavigate()
    const [values,setValues]=React.useState({
        name:name,
        email:email
    })
    const handleEditUser=()=>{
       setValues({name:"",email:""})
       dispatch(editUser({
        id:params.id,
         name:values.name,
         email:values.email
       }))
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
    <Button onClick={handleEditUser}>Edit</Button>
   </div>
  )
}

export default EditUser