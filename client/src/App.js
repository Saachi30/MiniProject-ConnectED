import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/LoginPage/Login";
import Choice from "./components/ChoicePage/Choice";
import StudentPage from "./components/StudentPage/StudentPage";

function App() {
  return (
    <div className="App">
      <div class="landingPage">
        <div class="nav">
          <div class="logo">
            <div class="loggo"></div>
            <h2 class="logoName">ConnectED</h2>
          </div>
          <button class="Login">Login/ Sign up</button>
        </div>

        <LandingPage />
        <Choice />
        <Login />
        <StudentPage />
      </div>
    </div>
  );
}

export default App;
