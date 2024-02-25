import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/LoginPage/Login";
import Choice from "./components/ChoicePage/Choice";
import Student from "./components/StudentPage/Student";
import Profile from "./components/ProfilePage/Profile";
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import ListPage from "./components/ListPage/ListPage";
import Register from "./components/LoginPage/Register";
import { useState } from "react";

function App() {
  const [email, setEmail]=useState("");
  const [data,setData]=useState({
    name: "",
    email: "",
    phoneNumber: "", 
    preferredDomain: "" ,
    password: ""
  })
  return (
    <div className="App">
      <div>
        <div class="nav">
          <div class="logo">
            <div class="loggo"></div>
            <h2 class="logoName">ConnectED</h2>
          </div>
          
        </div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/login" element={<Login email={email} setEmail={setEmail}/>}/>
          {/* Route for student registration */}
          <Route path="/register/student" element={<Register type="student" email={email} setEmail={setEmail}/>} />
          {/* Routes for alumni and mentor registration */}
          <Route path="/register/alumni" element={<Register type="alumni" email={email} setEmail={setEmail}/>} />
          <Route path="/register/mentor" element={<Register type="mentor" email={email} setEmail={setEmail}/>} />
          <Route path="/student" element={<Student email={email} setEmail={setEmail} data={data} setData={setData}/>}/>
          <Route path="/profile" element={<Profile email={email} setEmail={setEmail} />}/>
          <Route path="/list" element={<ListPage/>}/>
          <Route path="/list" element={<ListPage/>}/>
        </Routes>
      </BrowserRouter>
        
      </div>
    </div>
  );
}

export default App;
