import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/Userlist";
import User from "./pages/user/User";
import Newuser from "./pages/newuser/NewUser";
import Productlist from "./pages/ProductList/Productlist";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userid">
            {/* after user it can be anything*/}
            <User />
          </Route>
          <Route path="/NewUser">
            {/* after user it can be anything*/}
            <Newuser />
          </Route>
          <Route exact path="/products">
            <Productlist />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
