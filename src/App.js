
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Blog from './Components/Blog/Blog';
import DetailService from './Components/DetailService/DetailService';

import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PageNotFound from './Components/PageNotFound/PageNotFound';





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
            <Route path="/about">
              <AboutUs></AboutUs>

            </Route>
            <Route path="/blog">
              <Blog></Blog>

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
