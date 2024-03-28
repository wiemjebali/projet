import './App.css';
import Regsiter from './Components/Regsiter';
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import { Routes, Route } from "react-router-dom"
import ListContact from './component/ListContact'
import Add from "./component/Add"
import Update from "./component/Update"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regitser" element={<Regsiter />} />


        <Route path='/Recette' element={<ListContact />} />
        <Route path='/fiches' element={<Add />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>

    </div>
  );
}

export default App;
