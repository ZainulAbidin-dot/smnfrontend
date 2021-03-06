import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import NotFound from "./components/layout/NotFound";
import PrivateRoute from "./components/routing/PrivateRoute";
import { LOGOUT } from "./actions/types";
import EditProfile from "./components/profile-forms/EditProfile";
import CreateProfile from "./components/profile-forms/CreateProfile";
import Extra from "./components/Extra";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

const App = () => {
  // useEffect(() => {
  //   // check for token in LS when app first runs
  //   if (localStorage.token) {
  //     // if there is a token set axios headers for all requests
  //     setAuthToken(localStorage.token);
  //   }
  //   // try to fetch a user, if no token or invalid token we
  //   // will get a 401 response from our API
  //   // store.dispatch(loadUser());

  //   // log user out from all tabs if they log out in one tab
  //   window.addEventListener("storage", () => {
  //     if (!localStorage.token) store.dispatch({ type: LOGOUT });
  //   });
  // }, []);

  return (
    <Router>
      <Navbar />
      <section className="container">
        <Alert />
      </section>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="extra" element={<Extra />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create-profile" element={<CreateProfile />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="add-experience" element={<AddExperience />} />
          <Route path="add-education" element={<AddEducation />} />
          <Route path="posts" element={<Route component={Posts} />} />
          <Route path="posts/:id" element={<Route component={Post} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
