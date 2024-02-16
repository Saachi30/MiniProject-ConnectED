import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';

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

      <LandingPage/>
    </div>

    
    </div>
  );
}

export default App;
