
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import DetailService from './Components/DetailService/DetailService';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Doctors from './Components/Doctors/Doctors';
import OurPlans from './Components/OurPlans/OurPlans';





function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/detailsservice/:id">
              <DetailService></DetailService>
            </PrivateRoute>
            <Route path="/doctors">
              <Doctors></Doctors>

            </Route>
            <Route path="/ourplans">
              <OurPlans></OurPlans>

            </Route>
            <Route path="/login">
              <Login></Login>

            </Route>
            <Route path="/register">
              <Register></Register>

            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
