import { Field, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { setLogin } from "../../state";

import { Col, Row, Button, Modal, ModalBody, ModalHeader } from "reactstrap";

import logo from '../../assets/logo-social.png'; // Tell webpack this JS file uses this image



const LoginPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logInUser = async (values) => {

        const loginUser = await fetch(
            "https://cj897jxtlg.execute-api.us-east-1.amazonaws.com/user/login",
            {
                method: "POST",
                body: values,
            }
        );

        const responseLogin = await loginUser.json();

        if (responseLogin.status === 'Ok') {

            dispatch(setLogin({
                user: responseLogin.user,
                //token: loggedIn.token
                token: "TOKEN"
            }));

            navigate("/products");
        } else {
            console.log("responseLogin -> ", responseLogin);
            alert("Usuario o contraseña incorrectos")
        }

    }

    return (
        <div className="container" style={{ backgroundColor: "#FFFFFFE6" }}>
            {(
                <>
                    <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Row>
                            <Col md={6}>
                                <img src={logo} alt="Logo" width={500} />        
                            </Col>
                            <Col md={6}>
                                <Formik
                                    initialValues={{ email: '', password: '' }}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                            errors.email = 'Campo obligatorio';
                                        } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                            errors.email = 'Email invalido';
                                        }

                                        if (!values.password) {
                                            errors.password = 'Campo obligatorio';
                                        }

                                        return errors;
                                    }}
                                    onSubmit={async (values, { setSubmitting }) => {

                                        logInUser(JSON.stringify(values, null, 2));

                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                        /* and other goodies */
                                    }) => (
                                        <div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter email" />
                                                    <small id="emailHelp" className="form-text text-muted">{errors.email && touched.email && errors.email}</small>
                                                </div>
                                                <div className="form-group">
                                                    <label>Contraseña</label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.password}
                                                        className="form-control"
                                                        id="exampleInputPassword1"
                                                        placeholder="Password" />
                                                    <small id="emailHelp" className="form-text text-muted">{errors.password && touched.password && errors.password}</small>
                                                </div>
                                                <br />
                                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Log In</button>
                                                <br />
                                                
                                            </form>

                                        </div>
                                    )}

                                </Formik>
                            </Col>
                        </Row>
                    </div>
                </>
            )}

        </div>
    );
}

export default LoginPage;