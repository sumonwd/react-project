import React, { Component } from 'react';
import { Formik } from 'formik'

 import {auth} from '../../redux/authActionCreators'
import {connect} from 'react-redux'
 const mapDispatchToProps = dispatch => {
     return {
         auth: (email, password,mode) => dispatch(auth(email, password, mode))
     }
 }
class Auth extends Component {
    state = {
        mode: "Sign Up"
    }
    switchModehandler = () => {
        this.setState({
            mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up"
        })
    }
    render() {
        return (
            <div>
                <Formik
                    initialValues={
                        {
                            email: "",
                            password: "",
                            passwordConfirm: "",
                        }
                    }
                    onSubmit={
                        (values) => {
                            this.props.auth(values.email, values.password, this.state.mode)
                        }
                    }
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = "Required";
                        } else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(values.email)) {
                            errors.email = "Invalid email address";
                        }

                        if (!values.password) {
                            errors.password = "Required";
                        }else if (values.password.length < 4) {
                            errors.password = "Must be atleast 4 characters!";
                        }
                        if (this.state.mode === "Sign Up") {
                            
                            if (!values.passwordConfirm) {
                                errors.passwordConfirm = "Required";
                            }else if (values.passwordConfirm !== values.password) {
                                errors.passwordConfirm = "Password does not match!";
                            }
                        }
                        return errors;
                    }}
                >
                    {({ values, handleChange, handleSubmit, errors }) => (<div style={{ 
                        border: "1px solid grey",
                        padding: "50px",
                        borderRadius: "7px"
                     }}>
                         <button style={{ 
                             width: "100%",
                             color: "#fff",
                             backgroundColor: "#d70f64"
                          }} className="btn mb-2" 
                          onClick={this.switchModehandler}>Switch To {this.state.mode === "Sign Up" ? "Login": 'Sign Up'}</button>
                        <form onSubmit={handleSubmit}>
                            <input
                                name="email"
                                placeholder="Enter Your Email"
                                className="form-control"
                                value={values.email}
                                onChange={handleChange} />
                               <span className="text-danger"> {errors.email}</span>
                            <br />
                            <input
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                value={values.password}
                                onChange={handleChange} />
                                 <span className="text-danger"> {errors.password}</span>
                            <br />
                            {this.state.mode === "Sign Up" ? <div><input
                                name="passwordConfirm"
                                placeholder=" Confirm Password"
                                className="form-control"
                                value={values.passwordConfirm}
                                onChange={handleChange} />
                                 <span className="text-danger"> {errors.passwordConfirm}</span>
                            <br /></div> : null}
                            
                            <button type="submit" className="btn btn-success">{this.state.mode === "Sign Up" ? "Sign Up": "Login"}</button>
                        </form>
                    </div>)}
                </Formik>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps) (Auth);