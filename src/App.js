import './App.css';
import UserHome from './components/userhome/userhome';
import AdminHome from './components/adminhome/adminhome';
import UploadData from './components/uploadData/uploadData';
import Searchdata from './components/searchdata/searchdata';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/error" element={<Error />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
