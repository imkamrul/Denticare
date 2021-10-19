import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../../img/google.png'
import useAuth from '../hooks/useAuth';
import { useHistory } from 'react-router';

const Register = () => {


    const history = useHistory();
    const { handleNameChange, handleEmailChnage, handlepasswordChnage, handlepasswordReChnage, passError, setPassError, registerNewUser, setUserName, verifyEmail, password, rePassword } = useAuth();

    const handleCreateAccount = (e) => {


        e.preventDefault();
        if (password !== rePassword) {
            setPassError("Password does not match")

        } else {
            registerNewUser(e)
                .then((result) => {
                    setUserName()
                        .then(() => {
                            verifyEmail()
                                .then(result => {


                                    history.push('/home')
                                    window.location.reload();



                                })


                        }).catch((error) => {

                        });
                })

        }
    }


    return (
        <div>
            <Container>
                <Row className=" d-flex justify-content-center my-5 custom-shadow">
                    <Col md={6} className="form-bg p-5">
                        <h1 className="fs-3 fw-lighter">Did not have already an Account ? </h1>
                        <p className=" fw-lighter">Do you have an account on our hospital page? If you have an account, you do not need to open an unnecessary account, you can log in by clicking the Sign Up button.</p>
                        <Button variant="info" className="singup-button"> <Link to="/login">Sign In</Link></Button>


                    </Col>


                    <Col md={6} className="p-5">
                        <h3 className="text-muted mb-3" >Create a new account </h3>
                        <Form className="mx-auto">
                            <Row className="mb-3">
                                <Col sm={3}>
                                    <label htmlFor="inputEmail3" className="col-form-label">Name</label>
                                </Col>
                                <Col sm={9}>
                                    <input type="text"
                                        onBlur={handleNameChange}
                                        className="form-control" id="name" placeholder="Full Name" required />
                                </Col>

                            </Row>
                            <Row className="mb-3">
                                <Col sm={3}>
                                    <label htmlFor="inputEmail3" className="col-form-label">Email</label>
                                </Col>
                                <Col sm={9}>
                                    <input type="email"
                                        onBlur={handleEmailChnage} className="form-control" id="inputEmail3" placeholder="email" required />

                                </Col>

                            </Row>
                            <Row className="mb-3">
                                <Col sm={3}>
                                    <label htmlFor="inputPassword3" className="col-form-label" >Password</label>
                                </Col>
                                <Col sm={9}>
                                    <input type="password" className="form-control" id="inputPassword3"
                                        onBlur={handlepasswordChnage}
                                        placeholder="password" required />
                                </Col>

                            </Row>
                            <Row className="mb-3">
                                <Col sm={3}>
                                    <label htmlFor="inputPassword3"

                                        className="col-form-label pt-0"
                                    >Retype Password</label>
                                </Col>
                                <Col sm={9}>
                                    <input type="password" className="form-control" id="inputPaword3"
                                        onBlur={handlepasswordReChnage}
                                        placeholder="password" required />
                                </Col>
                                <p className="text-danger">{passError}</p>

                            </Row>
                            <div className="text-center">
                                <Button variant="info"
                                    onClick={handleCreateAccount}
                                    type="submit"><span className="text-white fs-5 pb-4">Register</span></Button>
                            </div>

                        </Form>
                        <hr />
                        <div className="mb-0">
                            <div className="text-center">
                                <p className="text-muted">Connect with social media</p>
                                <img src={google} className="link-img-style" alt="" />

                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;