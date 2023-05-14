import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hotels from './pages/Hotels';
import Forms from './pages/Forms';
import Details from './pages/Details';
import Rooms from './pages/Rooms';
import Register from './pages/Register';
import Login from './pages/Login';
import Adminhome from './pages/Adminhome';
import Adminnav from './components/Adminnav';
import Adminregister from './pages/Adminregister';
import Userregistaration from './pages/Userregistaration';
import Viewuser from './pages/Viewuser';
import Viewusersingly from './pages/Viewusersingly';
import Edit from './pages/Edit';
import Sample from './pages/Sample';
import Viewroomssingly from './pages/Viewroomssingly';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Hotels/>}></Route>
        <Route path='/booking' element={<Rooms/>}></Route>
        <Route path='/details' element={<Details/>}></Route>
        <Route path='/forms' element={<Forms/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        {/* <Route path='/login' element={<Login/>}></Route> */}
        <Route path='/adminhome' element={<Adminhome/>}></Route>
        <Route path='/adminnav' element={<Adminnav/>}></Route>
        <Route path='/adminreg' element={<Adminregister/>}></Route>
        <Route path='/userreg' element={<Userregistaration/>}></Route>
        <Route path='/viewuser' element={<Viewuser/>}></Route>
        <Route path='/viewusersingly/:id' element={<Viewusersingly/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        <Route  path='/sample' element={<Sample/>}></Route>
        <Route path='/viewroomssingly/:id' element={<Viewroomssingly/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
