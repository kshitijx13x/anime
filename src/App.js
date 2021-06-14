import logo from './logo.svg';
import './App.css';
import Home from './Home.jsx';
import Anime from './Anime';
import About from './About';
import Contact from './Contact';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import {NavLink} from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path = "/" component={Home}></Route>
        <Route exact path = "/anime" component={Anime}></Route>
        <Route exact path = "/about" component={About}></Route>
        <Route exact path = "/contact" component={Contact}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
