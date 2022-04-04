import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Home from "./Pages/Home";
import View from "./Pages/View";
import Login from "./Pages/Login";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer";
import Logout from "./Pages/Logout";

import './App.css';


function App() {

  return (

    <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/contactus" component={ContactUs}/>
      <Route exact path="/view" component={View}/>
      <Redirect to="/"/>
    </Switch>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
