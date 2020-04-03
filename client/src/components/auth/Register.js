import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions'
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
    constructor() { //component state is diff. app state (managed by Redux)
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this) //we pass this into function onChange; we rename variable to avoid typing ".bind(this)" in each field
        this.onSubmit = this.onSubmit.bind(this) //idem
    };

  componentDidMount() {
      if(this.props.auth.isAuthenticated) {
          this.props.history.push('/dashboard');
      }
  }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange(e) { //e is event parameter; whenever user types; onChange function fires off
        this.setState({[e.target.name]: e.target.value}) // key and value notation []: xx
    };

    onSubmit(e) { // triggers when submit button is clicked
        e.preventDefault();

        const newUser = {
            name: this.state.name, //assign name to state component value
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        this.props.registerUser(newUser, this.props.history);

    };

    render() {

        const { errors } = this.state;
        // const errors = this.sate.errors
        return (
          <div className="container-scroller">
                  <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper auth p-0 theme-two">
                      <div className="row d-flex align-items-stretch">
                        <div className="col-md-4 banner-section d-none d-md-flex align-items-stretch justify-content-center">
                          <div className="slide-content bg-2"> </div>
                        </div>
                        <div className="col-12 col-md-8 h-100 bg-white">
                          <div className="auto-form-wrapper d-flex align-items-center justify-content-center flex-column">
                            <div className="nav-get-started">
                              <p>Already have an account?</p>
                              <Link className="btn get-started-btn" to="/login">
                                SIGN IN
                              </Link>
                            </div>
                            <form action="#" onSubmit={this.onSubmit}>
                              <h3 className="mr-auto">Register</h3>
                              <p className="mb-5 mr-auto">Enter your details below.</p>

                              <TextFieldGroup
                                  placeholder="Name"
                                  name="name"
                                  type="text"
                                  icon="mdi mdi-account-outline"
                                  value={this.state.name}
                                  onChange={this.onChange}
                                  error={errors.name}
                              />

                              <TextFieldGroup
                                  placeholder="Email"
                                  name="email"
                                  type="email"
                                  icon="mdi mdi-email-outline"
                                  value={this.state.email}
                                  onChange={this.onChange}
                                  error={errors.email}
                              />

                              <TextFieldGroup
                                  placeholder="Password"
                                  name="password"
                                  type="password"
                                  icon="mdi mdi-lock-outline"
                                  value={this.state.password}
                                  onChange={this.onChange}
                                  error={errors.password}
                              />

                              <TextFieldGroup
                                  placeholder="Confirm Password"
                                  name="password2"
                                  type="password"
                                  icon="mdi mdi-lock-outline"
                                  value={this.state.password2}
                                  onChange={this.onChange}
                                  error={errors.password2}
                              />

                              <div className="form-group">
                                <input type="submit" value="SIGN UP" className="btn btn-primary submit-btn" />
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
