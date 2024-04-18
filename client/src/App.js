import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/LoginPage/Login";
import Choice from "./components/ChoicePage/Choice";
import Student from "./components/StudentPage/Student";
import Profile from "./components/ProfilePage/Profile";
import ListPage from "./components/ListPage/ListPage";
import Register from "./components/LoginPage/Register";
import MentorProfile from "./components/MentorProfile/MentorProfile";
import PendingReqs from "./components/PendingReqs/PendingReqs";
import SearchedMentorProfile from "./components/ProfilePage/SearchedMentorProfile";
import "./App.css";

function App() {
  const [searchedMentorData, setSearchedMentorData] = useState({});
  const [listType, setListType] = useState(null);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar setListType={setListType} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/choice" element={<Choice />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/register/student"
              element={<Register type="student" />}
            />
            <Route
              path="/register/alumni"
              element={<Register type="alumni" />}
            />
            <Route
              path="/register/mentor"
              element={<Register type="mentor" />}
            />
            <Route path="/student" element={<Student />} />
            <Route path="/profile" element={<Profile />} />
            {listType && (
              <Route
                path="/lists"
                element={<ListPage listType={listType} />}
              />
            )}
            <Route path="/mentorprofile" element={<SearchedMentorProfile searchedMentorData={searchedMentorData} />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
