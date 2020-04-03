import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentCompany } from '../../actions/companyActions';

class NavBar extends Component {

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
        this.props.clearCurrentCompany();
        this.props.logoutUser();
    }


    render() {
        const { isAuthenticated, user } = this.props.auth;

        const navloggedIn = (
        <div>
          <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row" style={{
            //backgroundColor: 'red',
            color: '#3c3f54'
          }}>
                  <div className="text-center navbar-brand-wrapper d-flex align-items-left justify-content-left">
                    <Link className="navbar-brand brand-logo ml-4" to="/">
                      <img src="/images/logo.svg" alt="logo" style={{
                        width: '100%',
                        height: '100%'
                      }}/>
                    </Link>
                    <Link className="navbar-brand brand-logo-mini" to="/">
                      <img src="/images/logo-mini.svg" alt="logo" />
                    </Link>
                  </div>
                  <div className="navbar-menu-wrapper d-flex align-items-center" style={{
                    color: '#3c3f54'
                  }}>
                    {/* <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                      <span className="mdi mdi-menu" />
                    </button> */}
                    <ul className="navbar-nav navbar-nav-left header-links d-none d-md-flex">
                      <li className="nav-item" style={{
                        wdith: '182px',
                        color: '#878787'
                      }}>
                        <Link className="nav-link" to={`/company/user/${user.id}`}>
                          <i className="mdi mdi-magnify" style={{
                            color: '#B8B8B8'
                          }}/>
                          <span style={{
                            width: '182px',
                          }}>
                            Search for employee or team
                          </span>

                        </Link>
                      </li>
                      {/* <li className="nav-item active">
                        <a href="/#" className="nav-link">
                          <i className="mdi mdi-elevation-rise" />Reports</a>
                      </li> */}
                      {/* <li className="nav-item">
                        <a href="/#" className="nav-link">
                          <i className="mdi mdi-bookmark-plus-outline" />Score</a>
                      </li> */}
                    </ul>
                    <ul className="navbar-nav navbar-nav-right" style={{
                      marginLeft: '555px'
                    }}>
                      {/* <li className="nav-item dropdown">
                        <a href="/#" className="nav-link count-indicator dropdown-toggle" id="messageDropdown" data-toggle="dropdown" aria-expanded="false">
                          <i className="mdi mdi-file-outline" />
                          <span className="count">7</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                          <a href="/#" className="dropdown-item py-3">
                            <p className="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                            <span className="badge badge-pill badge-primary float-right">View all</span>
                          </a>
                          <div className="dropdown-divider" />
                          <a href="/#" className="dropdown-item preview-item">
                            <div className="preview-thumbnail">
                              <img src="/images/faces/face10.jpg" alt="" className="img-sm profile-pic" /> </div>
                            <div className="preview-item-content flex-grow py-2">
                              <p className="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                              <p className="font-weight-light small-text"> The meeting is cancelled </p>
                            </div>
                          </a>
                          <a className="dropdown-item preview-item" href="/#">
                            <div className="preview-thumbnail">
                              <img alt="" src="/images/faces/face12.jpg" className="img-sm profile-pic" /> </div>
                            <div className="preview-item-content flex-grow py-2">
                              <p className="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                              <p className="font-weight-light small-text"> The meeting is cancelled </p>
                            </div>
                          </a>
                          <a href="/#" className="dropdown-item preview-item">
                            <div className="preview-thumbnail">
                              <img src="/images/faces/face1.jpg" className="img-sm profile-pic" alt=""/> </div>
                            <div className="preview-item-content flex-grow py-2">
                              <p className="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                              <p className="font-weight-light small-text"> The meeting is cancelled </p>
                            </div>
                          </a>
                        </div>
                      </li> */}
                      <li className="nav-item dropdown ml-1 mr-1">
                        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="/#" data-toggle="dropdown">
                          <i className="mdi mdi-bell-outline" style={{
                            color: '#3C3F54',

                          }}/>
                          <span className="count" style={{
                            backgroundColor: '#656DFF',
                            marginTop: '6px',
                            width: '8px',
                            height: '8px',
                            borderRadius: '100%',
                            borderStyle: 'solid',
                            borderWidth: '1px',
                            borderColor: 'white',
                            zIndex: '1'
                          }}></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
                          <a href="/#" className="dropdown-item py-3 border-bottom">
                            <p className="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
                            <span className="badge badge-pill badge-primary float-right">View all</span>
                          </a>
                          <a className="dropdown-item preview-item py-3" href="/#">
                            <div className="preview-thumbnail">
                              <i className="mdi mdi-alert m-auto text-primary" />
                            </div>
                            <div className="preview-item-content">
                              <h6 className="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
                              <p className="font-weight-light small-text mb-0"> Just now </p>
                            </div>
                          </a>
                          <a className="dropdown-item preview-item py-3" href='/#'>
                            <div className="preview-thumbnail">
                              <i className="mdi mdi-settings m-auto text-primary" />
                            </div>
                            <div className="preview-item-content">
                              <h6 className="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
                              <p className="font-weight-light small-text mb-0"> Private message </p>
                            </div>
                          </a>
                          <a href="/#" className="dropdown-item preview-item py-3">
                            <div className="preview-thumbnail">
                              <i className="mdi mdi-airballoon m-auto text-primary" />
                            </div>
                            <div className="preview-item-content">
                              <h6 className="preview-subject font-weight-normal text-dark mb-1">New user registration</h6>
                              <p className="font-weight-light small-text mb-0"> 2 days ago </p>
                            </div>
                          </a>
                        </div>
                      </li>
                      {/* <li className="nav-item d-none d-lg-block color-setting">
                        <a href="/#" className="nav-link" >
                          <i className="mdi mdi-tune" />
                        </a>
                      </li> */}
                      <li className="nav-item dropdown d-none d-xl-inline-block ml-3 mr-0">
                        <a href="/#" className="nav-link dropdown-toggle" id="UserDropdown" data-toggle="dropdown" aria-expanded="false" style={{
                          alignItems: 'left'
                        }}>
                          <img alt=""  className="img-xs rounded-circle" src={require("../../assets/images/faces/face8.png")}  style={{
                            width: '36px',
                            height: '36px'
                          }}/>
                          <span className="profile-text mr-0" style={{
                            marginLeft: '5px',
                            fontFamily: 'Avenir',
                            fontSize: '15px',
                            fontWeight: '500',
                            fontStretch: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 'normal',
                            letterSpacing: 'normal',
                            color: '#3c3f54'
                          }}>
                          Alok</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                          {/* <a href="/#" className="dropdown-item p-0">
                            <div className="d-flex border-bottom">
                              <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                                <i className="mdi mdi-bookmark-plus-outline mr-0 text-gray" />
                              </div>
                              <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                                <i className="mdi mdi-account-outline mr-0 text-gray" />
                              </div>
                              <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                                <i className="mdi mdi-alarm-check mr-0 text-gray" />
                              </div>
                            </div>
                          </a> */}
                          <a href="/#" className="dropdown-item mt-2"> Manage Accounts </a>
                          <a href="/#" className="dropdown-item"> Change Password </a>
                          <a href="/#" className="dropdown-item"> Check Inbox </a>
                          <a
                            href="/#"
                            className="dropdown-item"
                            onClick={this.onLogoutClick.bind(this)}>
                              Sign Out
                          </a>
                        </div>
                      </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                      <span className="icon-menu" />
                    </button>
                  </div>
                </nav>
                <div id="right-sidebar" className="settings-panel">
                        <i className="settings-close mdi mdi-close" />
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                          <p className="settings-heading font-weight-bold border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                        </div>
                        <ul className="chat-list">
                          <li className="list active">
                            <div className="profile">
                              <img src="/images/faces/face1.jpg" alt="" />
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
                              <img src="/images/faces/face2.jpg" alt=""/>
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
                              <img src="/images/faces/face3.jpg" alt=""/>
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
                              <img src="/images/faces/face4.jpg" alt=""/>
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
                              <img src="/images/faces/face5.jpg" alt=""/>
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
                              <img src="/images/faces/face6.jpg" alt=""/>
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
                    </div>
        )

        const navLoggedOut = (
          <div style={{display:'none'}}>
          <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                  <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <Link className="navbar-brand brand-logo" to="/">
                      <img src="/images/logo.svg" alt="logo" />
                    </Link>
                    <Link className="navbar-brand brand-logo-mini" to="/">
                      <img src="/images/logo-mini.svg" alt="logo" />
                    </Link>
                  </div>
                  <div className="navbar-menu-wrapper d-flex align-items-center">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                      <span className="mdi mdi-menu" />
                    </button>
                    <ul className="navbar-nav navbar-nav-left header-links d-none d-md-flex">
                      <li className="nav-item">
                        <Link className="nav-link" to={`/company/user/${user.id}`}>
                          Companys
                        </Link>
                      </li>
                      <li className="nav-item active">
                        <a href="/#" className="nav-link">
                          <i className="mdi mdi-elevation-rise" />Reports</a>
                      </li>
                      <li className="nav-item">
                        <a href="/#" className="nav-link">
                          <i className="mdi mdi-bookmark-plus-outline" />Score</a>
                      </li>
                    </ul>
                    <ul className="navbar-nav navbar-nav-right">
                      <li className="nav-item dropdown">
                        <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="/#" data-toggle="dropdown" aria-expanded="false">
                          <i className="mdi mdi-file-outline" />
                          <span className="count">7</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                          <a className="dropdown-item py-3" href="/#">
                            <p className="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                            <span className="badge badge-pill badge-primary float-right">View all</span>
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item preview-item" href="/#">
                            <div className="preview-thumbnail">
                              <img src="/images/faces/face10.jpg" className="img-sm profile-pic" alt="" /> </div>
                            <div className="preview-item-content flex-grow py-2">
                              <p className="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                              <p className="font-weight-light small-text"> The meeting is cancelled </p>
                            </div>
                          </a>
                          <a className="dropdown-item preview-item" href="/#">
                            <div className="preview-thumbnail">
                              <img src="/images/faces/face12.jpg" alt="" className="img-sm profile-pic" /> </div>
                            <div className="preview-item-content flex-grow py-2">
                              <p className="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                              <p className="font-weight-light small-text"> The meeting is cancelled </p>
                            </div>
                          </a>
                          <a className="dropdown-item preview-item" href="/#">
                            <div className="preview-thumbnail">
                              <img src="/images/faces/face1.jpg" alt="" className="img-sm profile-pic" /> </div>
                            <div className="preview-item-content flex-grow py-2">
                              <p className="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                              <p className="font-weight-light small-text"> The meeting is cancelled </p>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown ml-4">
                        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="/#" data-toggle="dropdown">
                          <i className="mdi mdi-bell-outline" />
                          <span className="count bg-success">4</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
                          <a className="dropdown-item py-3 border-bottom" href="/#" >
                            <p className="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
                            <span className="badge badge-pill badge-primary float-right">View all</span>
                          </a>
                          <a className="dropdown-item preview-item py-3" href="/#" >
                            <div className="preview-thumbnail">
                              <i className="mdi mdi-alert m-auto text-primary" />
                            </div>
                            <div className="preview-item-content">
                              <h6 className="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
                              <p className="font-weight-light small-text mb-0"> Just now </p>
                            </div>
                          </a>
                          <a className="dropdown-item preview-item py-3" href="/#" >
                            <div className="preview-thumbnail">
                              <i className="mdi mdi-settings m-auto text-primary" />
                            </div>
                            <div className="preview-item-content">
                              <h6 className="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
                              <p className="font-weight-light small-text mb-0"> Private message </p>
                            </div>
                          </a>
                          <a className="dropdown-item preview-item py-3" href="/#" >
                            <div className="preview-thumbnail">
                              <i className="mdi mdi-airballoon m-auto text-primary" />
                            </div>
                            <div className="preview-item-content">
                              <h6 className="preview-subject font-weight-normal text-dark mb-1">New user registration</h6>
                              <p className="font-weight-light small-text mb-0"> 2 days ago </p>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li className="nav-item d-none d-lg-block color-setting">
                        <a className="nav-link" href="/#">
                          <i className="mdi mdi-tune" />
                        </a>
                      </li>
                      <li className="nav-item dropdown d-none d-xl-inline-block">
                        <a className="nav-link dropdown-toggle" id="UserDropdown" href="/#" data-toggle="dropdown" aria-expanded="false">
                          <span className="profile-text">Richard V.Welsh !</span>
                          <img alt="" className="img-xs rounded-circle" src="/images/faces/face8.jpg" /> </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                          {/* <a className="dropdown-item p-0" href="/#" >
                            <div className="d-flex border-bottom">
                              <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                                <i className="mdi mdi-bookmark-plus-outline mr-0 text-gray" />
                              </div>
                              <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                                <i className="mdi mdi-account-outline mr-0 text-gray" />
                              </div>
                              <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                                <i className="mdi mdi-alarm-check mr-0 text-gray" />
                              </div>
                            </div>
                          </a>*/}
                          <a className="dropdown-item mt-2" href="/#" > Manage Accounts </a>
                          <a className="dropdown-item" href="/#" > Change Password </a>
                          <a className="dropdown-item" href="/#" > Check Inbox </a>
                          <a
                            className="dropdown-item"
                            href="/#"
                            onClick={this.onLogoutClick.bind(this)}>
                              Sign Out
                          </a>
                        </div>
                      </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                      <span className="icon-menu" />
                    </button>
                  </div>
                </nav>
                <div id="right-sidebar" className="settings-panel">
                        <i className="settings-close mdi mdi-close" />
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                          <p className="settings-heading font-weight-bold border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                        </div>
                        <ul className="chat-list">
                          <li className="list active">
                            <div className="profile">
                              <img src="/images/faces/face1.jpg" alt=""/>
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
                              <img src="/images/faces/face2.jpg" alt=""/>
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
                              <img src="/images/faces/face3.jpg" alt=""/>
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
                              <img src="/images/faces/face4.jpg" alt="" />
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
                              <img src="/images/faces/face5.jpg" alt="" />
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
                              <img src="/images/faces/face6.jpg" alt="" />
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
                    </div>
        )

        return ( //jsx is html inside javascript (but class is className)
          <div>
            {isAuthenticated ? navloggedIn : navLoggedOut}
          </div>
        );
    }
}

NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser, clearCurrentCompany })(withRouter(NavBar));
