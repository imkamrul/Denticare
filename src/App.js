
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';





function App() {
  return (
    <div >

      <Router>
        <Header></Header>



        <Switch>

          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route path="/home">
            <Home></Home>





          </Route>
          <Route path="*">

          </Route>

        </Switch>
        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;