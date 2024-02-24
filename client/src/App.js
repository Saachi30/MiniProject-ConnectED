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

function App() {
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
          <Route path="/login" element={<Login/>}/>
          {/* Route for student registration */}
          <Route path="/register/student" element={<Register type="student" />} />
          {/* Routes for alumni and mentor registration */}
          <Route path="/register/alumni" element={<Register type="alumni" />} />
          <Route path="/register/mentor" element={<Register type="mentor" />} />
          <Route path="/student" element={<Student/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/list" element={<ListPage/>}/>
          <Route path="/list" element={<ListPage/>}/>
        </Routes>
      </BrowserRouter>
        
      </div>
    </div>
  );
}

export default App;
