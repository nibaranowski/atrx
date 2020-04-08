import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

    render() {

        return (
          <div className="container-scroller landing-page">
               <div className="container-fluid top-banner">
                 <nav className="navbar navbar-expand-lg bg-transparent">
                   <div className="row flex-grow">
                     <div className="col-md-8 d-lg-flex flex-row mx-auto">
                       <a className="navbar-brand" href="../../index.html">
                         <img src="../../../assets/images/logo_star_white.svg" alt="logo" /> </a>
                       <button className="navbar-toggler collapsed float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon ti ti-menu text-white" />
                       </button>
                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav ml-auto">
                           {/*<li className="nav-item">
                             <a className="nav-link btn btn-link" href="../../index.html">HOME</a>
                           </li>*/}
                           <li className="nav-item">
                             <Link className="nav-link btn btn-link" to="/register" >SIGN UP</Link>
                           </li>
                           <li className="nav-item">
                             <Link className="nav-link btn btn-link" to="/login">LOGIN</Link>
                           </li>
                         </ul>
                       </div>
                     </div>
                   </div>
                 </nav>
                 <div className="row top-banner-content">
                   <div className="col-md-8 mx-auto">
                     <div className="row">
                       <div className="col-lg-7">
                         <h1 className="mr-2 text-white">
                           Manage employees from application to separation.
                         </h1>
                         <h3 className="font-weight-light text-white" style={{
                           fontWeight: '200'
                         }}>
                           Manage employees end-to-end in one app.
                         </h3>
                         <div className="mt-5">
                           {/*<button className="btn btn-primary btn-lg mr-2">LEARN MORE</button>*/}
                           <Link to="/register" >
                            <button className="btn btn-danger btn-lg">GET STARTED</button>
                           </Link>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="container-fluid middle-section bg-white">
                 <div className="row">
                   <div className="col-md-8 mx-auto">
                     <div className="row">
                       <div className="col-md-4 grid-margin stretch-card">
                         <div className="m-2">
                           <div className="card card-icon-top">
                             <div className="card-body">
                               <img src="../../../assets/images/samples/bootstrap-stack.png" className="card-icon" alt=""/>
                               <h4>Bootstrap 4</h4>
                               <p className="card-text"> Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. </p>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin stretch-card">
                         <div className="m-2">
                           <div className="card card-icon-top">
                             <div className="card-body">
                               <img alt="" src="../../../assets/images/samples/angular-4.png" className="card-icon" />
                               <h4>Angular 5</h4>
                               <p className="card-text"> Angular is a platform that makes it easy to build applications with the web. </p>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin stretch-card">
                         <div className="m-2">
                           <div className="card card-icon-top">
                             <div className="card-body">
                               <img alt="" src="../../../assets/images/samples/html5.png" className="card-icon" />
                               <h4>Static HTML</h4>
                               <p className="card-text"> This is built with Jquery and static HTML that can be integrated to any framewroks </p>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="row mt-5 mb-5">
                       <div className="col-md-8 mx-auto">
                         <h3>Choose Your Demo</h3>
                         <p className="font-weight-light"> This template comes with AngularJs and HTML5/jQuery version, which helps to choose the best dashboard solution to fit your project needs. </p>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-md-4">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/dashboard.png" />
                             <div className="card-body py-3 border-top">
                               <label className="badge badge-warning">New</label>
                               <h6 className="font-weight-normal mb-0">Dashboard</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/widgets.png" />
                             <div className="card-body py-3 border-top">
                               <h6 className="font-weight-normal mb-0">Widgets</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/modal.png" />
                             <div className="card-body py-3 border-top">
                               <h6 className="font-weight-normal mb-0">Modals</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/e-commerce.png" />
                             <div className="card-body py-3 border-top">
                               <h6 className="font-weight-normal mb-0">E-commerce</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/email.png" />
                             <div className="card-body py-3 border-top">
                               <h6 className="font-weight-normal mb-0">Email</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/charts.png" />
                             <div className="card-body py-3 border-top">
                               <label className="badge badge-success">New</label>
                               <h6 className="font-weight-normal mb-0">Charts</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/editors.png" />
                             <div className="card-body py-3 border-top">
                               <h6 className="font-weight-normal mb-0">Code Editors</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/forms.png" />
                             <div className="card-body py-3 border-top">
                               <label className="badge badge-primary">New</label>
                               <h6 className="font-weight-normal mb-0">Forms</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4 grid-margin">
                         <div className="m-3">
                           <div className="card card-item-preview">
                             <img alt="" className="card-img-top" src="../../../assets/images/samples/popup.png" />
                             <div className="card-body py-3 border-top">
                               <h6 className="font-weight-normal mb-0">Popups</h6>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="container-fluid bottom-section">
                 <div className="row">
                   <div className="col-md-8 mx-auto">
                     <h3>Top Features</h3>
                     <div className="feature-list">
                       <div className="row feature-list-row">
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-briefcase" />
                           <h4>Lots of widgtes</h4>
                           <p className="feature-description">Wide range of Widgets are available with this Package.</p>
                         </div>
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-target" />
                           <h4>Bootstrap 4</h4>
                           <p className="feature-description">It is made with bootstrap 4 framework</p>
                         </div>
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-mobile" />
                           <h4>Fully Responsive</h4>
                           <p className="feature-description">Fully responsive accross all devices</p>
                         </div>
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-face-smile" />
                           <h4>3000+ icon fonts</h4>
                           <p className="feature-description">Lots of icon fonts are included in the package</p>
                         </div>
                       </div>
                       <div className="row feature-list-row">
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-layout-sidebar-left" />
                           <h4>Dark and light sidebars</h4>
                           <p className="feature-description">Included Dark and Light SideBar for getting desired look and feel.</p>
                         </div>
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-blackboard" />
                           <h4>Easy to customize</h4>
                           <p className="feature-description">Customization will be easy as we understand your pain.</p>
                         </div>
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-paint-bucket" />
                           <h4>6 theme colors</h4>
                           <p className="feature-description">We have included 6 pre-defined color schemes with this admin.</p>
                         </div>
                         <div className="col-lg-3 feature-list-item">
                           <i className="ti-receipt" />
                           <h4>Detailed documentation</h4>
                           <p className="feature-description">We have made detailed documentation, for ease of use.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <footer className="container-fluid footer">
                 <div className="row pb-5 text-white footer-top">
                   <div className="col-md-8 mx-auto">
                     <div className="row">
                       <div className="col-md-3">
                         <img src="../../../assets/images/logo_star_white.svg" className="brand-logo" alt="logo" />
                         <div className="d-flex flex-row footer-social-icons">
                           <i className="ti-facebook bg-facebook" />
                           <i className="ti-google bg-google" />
                           <i className="ti-dribbble bg-dribbble" />
                           <i className="ti-twitter-alt bg-twitter" />
                         </div>
                       </div>
                       <div className="col-md-6">
                         <div className="row contact-details">
                           <div className="col-12 d-flex mb-3">
                             <i className="ti-mobile mr-4" />
                             <h6 className="font-weight-normal">(0000) 1234 5678</h6>
                           </div>
                           <div className="col-12 d-flex mb-3">
                             <i className="ti-settings mr-4" />
                             <h6 className="font-weight-normal">support@staradmin.org</h6>
                           </div>
                         </div>
                         <ul className="nav mt-3">
                           <li className="nav-item">
                             <a className="nav-link" href="/#">Demos</a>
                           </li>
                           <li className="nav-item">
                             <a className="nav-link" href="/#">Features</a>
                           </li>
                           <li className="nav-item">
                             <a className="nav-link" href="/#">Support</a>
                           </li>
                           <li className="nav-item">
                             <a className="nav-link" href="/#">Documentation</a>
                           </li>
                         </ul>
                       </div>
                       <div className="col-md-3">
                         <h6>Newsletter</h6>
                         <p>To get the latest news from us please subscribe your email.</p>
                         <div className="mt-3">
                           <input type="email" className="form-control" placeholder="Enter your email" /> </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="row py-4 footer-bottom">
                   <div className="col-md-8 mx-auto">
                     <div className="container-fluid clearfix">
                       <span className="d-block text-center text-sm-left d-sm-inline-block">Copyright © 2018
                         <a href="/#">bootstrapdash</a>. All rights reserved.</span>
                       <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted &amp; made with
                         <i className="mdi mdi-heart text-danger" />
                       </span>
                     </div>
                   </div>
                 </div>


                 {/* this is where star admin goes */}
                 <div className="star-admin">
                  <div className="main-panel">
                    <div className="container-scroller">
                      {/* partial:../../partials/_navbar.html */}
                      {/* <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                        <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                          <a className="navbar-brand brand-logo" href="../../index.html">
                            <img src="../../../assets/images/logo.svg" alt="logo" /> </a>
                          <a className="navbar-brand brand-logo-mini" href="../../index.html">
                            <img src="../../../assets/images/logo-mini.svg" alt="logo" /> </a>
                        </div>
                        <div className="navbar-menu-wrapper d-flex align-items-center">
                          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span className="mdi mdi-menu" />
                          </button>
                          <ul className="navbar-nav navbar-nav-left header-links d-none d-md-flex">
                            <li className="nav-item">
                              <a href="/" className="nav-link">Schedule
                                <span className="badge badge-primary ml-1">New</span>
                              </a>
                            </li>
                            <li className="nav-item active">
                              <a href="/" className="nav-link">
                                <i className="mdi mdi-elevation-rise" />Reports</a>
                            </li>
                            <li className="nav-item">
                              <a href="/" className="nav-link">
                                <i className="mdi mdi-bookmark-plus-outline" />Score</a>
                            </li>
                          </ul>
                          <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item dropdown">
                              <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="/" data-toggle="dropdown" aria-expanded="false">
                                <i className="mdi mdi-file-outline" />
                                <span className="count">7</span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                                <a className="dropdown-item py-3">
                                  <p className="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                                  <span className="badge badge-pill badge-primary float-right">View all</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item preview-item">
                                  <div className="preview-thumbnail">
                                    <img src="../../../assets/images/faces/face10.jpg" alt="figure" className="img-sm profile-pic" /> </div>
                                  <div className="preview-item-content flex-grow py-2">
                                    <p className="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                                    <p className="font-weight-light small-text"> The meeting is cancelled </p>
                                  </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                  <div className="preview-thumbnail">
                                    <img src="../../../assets/images/faces/face12.jpg" alt="figure" className="img-sm profile-pic" /> </div>
                                  <div className="preview-item-content flex-grow py-2">
                                    <p className="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                                    <p className="font-weight-light small-text"> The meeting is cancelled </p>
                                  </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                  <div className="preview-thumbnail">
                                    <img src="../../../assets/images/faces/face1.jpg" alt="figure" className="img-sm profile-pic" /> </div>
                                  <div className="preview-item-content flex-grow py-2">
                                    <p className="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                                    <p className="font-weight-light small-text"> The meeting is cancelled </p>
                                  </div>
                                </a>
                              </div>
                            </li>
                            <li className="nav-item dropdown ml-4">
                              <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="/" data-toggle="dropdown">
                                <i className="mdi mdi-bell-outline" />
                                <span className="count bg-success">4</span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
                                <a className="dropdown-item py-3 border-bottom">
                                  <p className="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
                                  <span className="badge badge-pill badge-primary float-right">View all</span>
                                </a>
                                <a className="dropdown-item preview-item py-3">
                                  <div className="preview-thumbnail">
                                    <i className="mdi mdi-alert m-auto text-primary" />
                                  </div>
                                  <div className="preview-item-content">
                                    <h6 className="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
                                    <p className="font-weight-light small-text mb-0"> Just now </p>
                                  </div>
                                </a>
                                <a className="dropdown-item preview-item py-3">
                                  <div className="preview-thumbnail">
                                    <i className="mdi mdi-settings m-auto text-primary" />
                                  </div>
                                  <div className="preview-item-content">
                                    <h6 className="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
                                    <p className="font-weight-light small-text mb-0"> Private message </p>
                                  </div>
                                </a>
                                <a className="dropdown-item preview-item py-3">
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
                              <a className="nav-link" href="/">
                                <i className="mdi mdi-tune" />
                              </a>
                            </li>
                            <li className="nav-item dropdown d-none d-xl-inline-block">
                              <a className="nav-link dropdown-toggle" id="UserDropdown" href="/" data-toggle="dropdown" aria-expanded="false">
                                <span className="profile-text">Richard V.Welsh !</span>
                                <img className="img-xs rounded-circle" src="../../../assets/images/faces/face8.jpg" alt="Profile image" /> </a>
                              <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                                <a className="dropdown-item p-0">
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
                                </a>
                                <a className="dropdown-item mt-2"> Manage Accounts </a>
                                <a className="dropdown-item"> Change Password </a>
                                <a className="dropdown-item"> Check Inbox </a>
                                <a className="dropdown-item"> Sign Out </a>
                              </div>
                            </li>
                          </ul>
                          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span className="icon-menu" />
                          </button>
                        </div>
                      </nav> */}
                      {/* partial */}





                      {/* page-body-wrapper ends */}
                    </div>
                  </div>
                 </div>
               </footer>
             </div>

        );

    }

}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Landing);
