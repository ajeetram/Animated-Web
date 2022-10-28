
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Componets/Navbar";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Contact from "./Componets/Contact";
import { BrowserRouter, Route, Switch,Redirect} from "react-router-dom"
import Services from "./Componets/Services";



const App=()=> {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
       <Route exact path={"/"} component={Home}></Route>
       <Route exact path={"/about"} component={About}></Route>
       <Route exact path={"/contact"} component={Contact}></Route>
       <Route exact path={"/service"} component={Services}></Route>
       <Redirect to="/"></Redirect>
      </Switch>
    </BrowserRouter> 
    

   
  );
}

export default App;
