// React Router Dom ----> npm add react-router-dom // to connect different pages
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Routes in v6 is Switch of v5!!

import NavBar from "./components/nav-bar/NavBar";
import Register from "./pages-of-blog/registerPage/Register";
import Login from "./pages-of-blog/loginPage/Login";
import Settings from "./pages-of-blog/settingsPage/Settings";
import Single from "./pages-of-blog/singlePage/Single";
import WritePage from "./pages-of-blog/writePage/WritePage";
import Home from "./pages-of-blog/homePage/Home";


function App() {
  const currentUser = true;
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">{currentUser ? <Home /> : <Register />}</Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <WritePage /> : <Login />}</Route>
        <Route path="/settings">{currentUser ? <Settings /> : <Login />}</Route>
      </Routes>
    </Router>
  );
}

export default App;
