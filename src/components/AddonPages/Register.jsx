import React from 'react'
import { Link } from 'react-router-dom'


function Register() {
    return (
        <body className="bg-gradient-primary">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* <!-- Nested Row within Card Body --> */}
                                <div className="row">
                                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                                    <div className="col-lg-7">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">
                                                    Create an Account!
                                                </h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group row">
                                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-user"
                                                            id="exampleFirstName"
                                                            placeholder="First Name"
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-user"
                                                            id="exampleLastName"
                                                            placeholder="Last Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-user"
                                                        id="exampleInputEmail"
                                                        placeholder="Email Address"
                                                    />
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                                        <input
                                                            type="password"
                                                            className="form-control form-control-user"
                                                            id="exampleInputPassword"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input
                                                            type="password"
                                                            className="form-control form-control-user"
                                                            id="exampleRepeatPassword"
                                                            placeholder="Repeat Password"
                                                        />
                                                    </div>
                                                </div>
                                                <Link to="/login" style={{ textDecoration: 'none' }}>
                                                    <a
                                                        href="login.html"
                                                        className="btn btn-primary btn-user btn-block"
                                                    >
                                                        Register Account
                                                    </a>
                                                </Link>
                                                <hr />
                                                <Link
                                                    to="/dashboard"
                                                    style={{ textDecoration: 'none' }}
                                                >
                                                    <a
                                                        href="index.html"
                                                        className="btn btn-google btn-user btn-block"
                                                    >
                                                        <i className="fab fa-google fa-fw"></i> Register
                                                        with Google
                                                    </a>
                                                </Link>
                                                <Link
                                                    to="/dashboard"
                                                    style={{ textDecoration: 'none' }}
                                                >
                                                    <a
                                                        href="index.html"
                                                        className="btn btn-facebook btn-user btn-block my-2"
                                                    >
                                                        <i className="fab fa-facebook-f fa-fw"></i> Register
                                                        with Facebook
                                                    </a>
                                                </Link>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <Link to="/forgotpassword">
                                                    <a className="small" href="forgot-password.html">
                                                        Forgot Password?
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="text-center">
                                                <Link to="/login">
                                                    <a className="small" href="login.html">
                                                        Already have an account? Login!
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Register