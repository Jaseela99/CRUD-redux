import {BrowserRouter,Routes,Route} from "react-router-dom"
import AddUser from "./features/users/AddUser";
import UserList from './features/users/UserList';
import EditUser from "./features/users/EditUser";
function App() {
  return (
    <BrowserRouter>
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32 ">
<h1 className='text-center font-bold text-2xl text-gray-700'>CRUD</h1>
<Routes>

<Route exact path="/" element={<UserList/>}/>
<Route exact path="/adduser" element={<AddUser/>}/>
<Route exact path={`/edituser/:id`} element={<EditUser/>}/>
</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
