import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
import google from '../../img/google.png'
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home'
    const history = useHistory();
    const { signInWithgoogle, setIsLoading, handlepasswordChnage, handleEmailChnage, processLogin } = useAuth();
    const handleGoogleLogIn = () => {
        signInWithgoogle()
            .then((result) => {
                history.push(redirect_uri)

            }).finally(() => setIsLoading(false))
            .catch((error) => {

            });
    }
    const handleLogin = (e) => {
        e.preventDefault();
        processLogin()
            .then((result) => {
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false))
            .catch((error) => {
            });

    }
    return (
        <div className="">
            <Container>
                <Row className=" d-flex justify-content-center my-5">
                    <Col md={10}>
                        <Row className="custom-shadow">
                            <Col md={6} className=" pb-3  pt-5 px-5">
                                <h3 className="text-muted mb-3" >Log In</h3>
                                <hr />

                                <Form className="mx=auto">
                                    <Row className="mb-0">
                                        <Col sm={3}>
                                            <label htmlFor="inputEmail3" className="col-form-label">Email</label></Col>
                                        <Col sm={9}>
                                            <input type="email"
                                                onBlur={handleEmailChnage}
                                                className="form-control" id="inputEmail3" required />
                                        </Col>
                                    </Row>
                                    <Row className="mb-0 pt-3">
                                        <Col sm={3}>
                                            <label htmlFor="inputPassword3" className="col-form-label">Password</label></Col>
                                        <Col sm={9}>
                                            <input type="password"
                                                onBlur={handlepasswordChnage}
                                                className="form-control" id="inputPassword3" />
                                        </Col>
                                    </Row>
                                    <div className="text-center py-3">
                                        <Button variant="info"
                                            onClick={handleLogin}
                                        ><span className="text-white fs-5" >Sign In</span></Button>
                                    </div>
                                    {/* <input type="submit" className="btn btn-secondary btn-sm my-3" value="Forget Password ?" /> */}
                                </Form>
                                <hr />
                                <div className="mb-4">
                                    <div className="text-center">
                                        <p className="text-muted">Connect with social media</p>
                                        <img src={google} className="link-img-style" alt="" onClick={handleGoogleLogIn} />

                                    </div>
                                </div>


                            </Col>
                            <Col md={6} className="col-md-6  form-bg p-5">
                                <h1 className="fs-3 fw-lighter">Did not have an Account ? </h1>
                                <p className="fw-lighter">Don't you have an account on our hospital page? Opening an account is very easy. Now open the account by clicking on the e-register button.</p>
                                <Button variant="info" className="singup-button"><Link to="/register">Register</Link></Button>


                            </Col>

                        </Row>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;