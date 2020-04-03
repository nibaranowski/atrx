import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentTrip } from '../../actions/tripActions';

class Settingsbar extends Component {

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

    onLogoutClick(e) {
        e.preventDefault();
        this.props.clearCurrentTrip();
        this.props.logoutUser();
    }


    render() {
        const { isAuthenticated } = this.props.auth;

        const navloggedIn = (
          <div id="right-sidebar" className="settings-panel">
            <i className="settings-close mdi mdi-close" />
            <div className="d-flex align-items-center justify-content-between border-bottom">
              <p className="settings-heading font-weight-bold border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
            </div>
            <ul className="chat-list">
              <li className="list active">
                <div className="profile">
                  <img src="../assets/images/faces/face1.jpg" />
                  <span className="online" />
                </div>
                <div className="info">
                  <p>Thomas Douglas</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">19 min</small>
              </li>
              <li className="list">
                <div className="profile">
                  <img src="../assets/images/faces/face2.jpg" />
                  <span className="offline" />
                </div>
                <div className="info">
                  <div className="wrapper d-flex">
                    <p>Catherine</p>
                  </div>
                  <p>Away</p>
                </div>
                <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                <small className="text-muted my-auto">23 min</small>
              </li>
              <li className="list">
                <div className="profile">
                  <img src="../assets/images/faces/face3.jpg" />
                  <span className="online" />
                </div>
                <div className="info">
                  <p>Daniel Russell</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">14 min</small>
              </li>
              <li className="list">
                <div className="profile">
                  <img src="../assets/images/faces/face4.jpg" />
                  <span className="offline" />
                </div>
                <div className="info">
                  <p>James Richardson</p>
                  <p>Away</p>
                </div>
                <small className="text-muted my-auto">2 min</small>
              </li>
              <li className="list">
                <div className="profile">
                  <img src="../assets/images/faces/face5.jpg" />
                  <span className="online" />
                </div>
                <div className="info">
                  <p>Madeline Kennedy</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">5 min</small>
              </li>
              <li className="list">
                <div className="profile">
                  <img src="../assets/images/faces/face6.jpg" />
                  <span className="online" />
                </div>
                <div className="info">
                  <p>Sarah Graves</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">47 min</small>
              </li>
            </ul>
          </div>
        )

        const navLoggedOut = (
          <div></div>
        )

        return ( //jsx is html inside javascript (but class is className)
          <div>
            {isAuthenticated ? navloggedIn : navLoggedOut}
          </div>
        );
    }
}

Settingsbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser, clearCurrentTrip })(withRouter(Settingsbar));
