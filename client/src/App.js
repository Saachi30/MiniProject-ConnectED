import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/LoginPage/Login";
import Choice from "./components/ChoicePage/Choice";
import Student from "./components/StudentPage/Student";
import Profile from "./components/ProfilePage/Profile";
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import ListPage from "./components/ListPage/ListPage";

function App() {
  return (
    <div className="App">
      <div class="landingPage">
        <div class="nav">
          <div class="logo">
            <div class="loggo"></div>
            <h2 class="logoName">ConnectED</h2>
          </div>
          
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/choice" element={<Choice />}></Route>
            <Route path="/register" element={<Login />}></Route>
            <Route path="/student" element={<Student />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/list" element={<ListPage/>}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    </div>
  );
}

export default App;
