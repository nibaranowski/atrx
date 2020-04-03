import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import { Link } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
//import NavBar from '../layout/NavBar';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push(`/admin-user/${encodeURIComponent(this.state.email)}/create-or-join`);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push(`/admin-user/${encodeURIComponent(this.state.email)}/create-or-join`);//push to next page after login
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container-scroller">
       <div className="container-fluid page-body-wrapper full-page-wrapper">
         <div className="content-wrapper auth p-0 theme-two">
           <div className="row d-flex align-items-stretch">
             <div className="col-md-4 banner-section d-none d-md-flex align-items-stretch justify-content-center">
               <div className="slide-content bg-1"> </div>
             </div>
             <div className="col-12 col-md-8 h-100 bg-white">
               <div className="auto-form-wrapper d-flex align-items-center justify-content-center flex-column">
                 <div className="nav-get-started">
                   <p>Don't have an account?</p>
                    <Link className="btn get-started-btn" to="/register" >
                      GET STARTED
                    </Link>
                 </div>
                 <form action="#" onSubmit={this.onSubmit}>
                   <h3 className="mr-auto">Hello! let's get started</h3>
                   <p className="mb-5 mr-auto">Enter your details below.</p>
                   <TextFieldGroup
                      name="email"
                      placeholder="Email Address"
                      value={this.state.email}
                      info=""
                      error={errors.email}
                      type="email"
                      icon=""
                      title="Email Address"
                      disabled=""
                      onChange={this.onChange}
                   />
                   <TextFieldGroup
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      info=""
                      error={errors.password}
                      type="password"
                      icon=""
                      title="Password"
                      disabled=""
                      onChange={this.onChange}
                   />
                   <div className="form-group">
                    <input type="submit" value="SIGN IN" className="btn btn-primary submit-btn" />
                   </div>
                   <div className="wrapper mt-5 text-gray">
                     <p className="footer-text">Copyright © 2018 ATSx, inc. All rights reserved.</p>
                     <ul className="auth-footer text-gray">
                       <li>
                         <a href="/#" disabled="disabled">Terms &amp; Conditions</a>
                       </li>
                       <li>
                         <a href="/#" disabled="disabled">Cookie Policy</a>
                       </li>
                     </ul>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
         {/* content-wrapper ends */}
       </div>
       {/* page-body-wrapper ends */}
     </div>

    );
  }
}

Login.propTypes = { // propTypes! with min p
  loginUser: PropTypes.func.isRequired, // PropTypes! with capital P
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
