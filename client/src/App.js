import './App.css';
import NavBar from './components/topbar/NavBar';
import LogIn from './pages/login/LogIn';
import Register from './pages/register/Register';
//import Setting from './pages/settings/Setting';
import Single from './pages/single/Single';
import Write from './pages/writer/Write';
import Home from './pages/home/Home';
import { useContext } from "react";
import { Context } from "./context/Context";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const { user } = useContext(Context);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/"> < Home />
          </Route>
          <Route path="/register" >
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/login" >
            {user ? <Home /> : <LogIn />}
          </Route>
          <Route path="/write" >
            {user ? <Write /> : <Register />}
          </Route>
          {/* <Route path="/setting" >
            {user ? <Setting /> : <Register />}
          </Route> */}
          <Route path="/post/:postId"> <Single />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
