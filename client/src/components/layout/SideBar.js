import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentCompany } from '../../actions/companyActions';

class SideBar extends Component {

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
        const { isAuthenticated } = this.props.auth;

        const navloggedIn = (
          <div>
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
                  <ul className="nav">
                    <li className="nav-item nav-profile">
                      <div className="nav-link" style={{
                          background: '#0E134B'
                      }}>
                        {/* <div className="user-wrapper">
                          <div className="profile-image">
                            <img src="/images/faces/face8.jpg" alt=""/> </div>
                          <div className="text-wrapper">
                            <p className="profile-name">Richard V.Welsh</p>
                            <div>
                              <small className="designation text-muted">Manager</small>
                              <span className="status-indicator online" />
                            </div>
                          </div>
                        </div> */}
                        {/* <button className="btn btn-success btn-block">
                          <i className="mdi mdi-plus" />
                          Define
                        </button> */}
                        <div className="dropdown">
                          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{
                              width: '210px',
                              height: '46px',
                              borderRadius: '6px',
                              border: 'solid 0.8px #8689A5',
                              background: 'none'
                          }}>
                            <img alt=""  className="img-xs rounded-circle" src={require("../../assets/images/side-bar/define.png")} style={{
                              width: '16px',
                              height: '16px',
                              marginRight: '9px'
                            }}/>
                            <span style ={{
                              fontSize: '15px',
                              fontWeight: 'normal',
                              fontStretch: 'normal',
                              fontStyle: 'normal',
                              lineHeight: 'normal',
                              letterSpacing: 'normal',
                              // color: '#ffffff'
                            }}>
                              Define
                          </span>
                          </button>
                          {/* {console.log('this.props', this.props)} */}
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{
                            width: '210px'
                          }}>
                            {/* <h6 className="dropdown-header">Settings</h6> */}
                            <Link className="dropdown-item" to={`/admin-user/${this.props.auth.user.id}/company/company_id/define`} style={{
                              width: '210px'
                            }}>Define</Link>
                            <Link className="dropdown-item" to={`/admin-user/${this.props.auth.user.id}/company/company_id/hire`}>Hire</Link>
                            <Link className="dropdown-item" to={`/admin-user/${this.props.auth.user.id}/company/company_id/onboard`}>Onboard</Link>
                            <Link className="dropdown-item" to={`/admin-user/${this.props.auth.user.id}/company/company_id/coach`}>Coach</Link>
                            <Link className="dropdown-item" to={`/admin-user/${this.props.auth.user.id}/company/company_id/analyze`}>Analyze</Link>
                            <Link className="dropdown-item" to={`/admin-user/${this.props.auth.user.id}/company/company_id/terminate`}>Terminate</Link>
                            {/* <div className="dropdown-divider" />
                            <a className="dropdown-item" href="/">Separated link</a> */}
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item" style={{
                      // width: '210px',
                      // margin: 'auto'
                    }}>
                      <a className="nav-link" data-toggle="collapse" href="#technology-dropdown" aria-expanded="false" aria-controls="technology-dropdown" style= {{
                        // paddingLeft: '14px',
                        // paddingRight: '14px',
                        // width: '210px',
                        // height: '46px',
                        // borderRadius: '6px'
                      }}>
                        <i className="menu-icon mdi mdi-laptop-chromebook" style={{
                          color: '#6E7193',
                          marginRight: '15px'
                        }}/>
                        <span className="menu-title" style={{
                          color: 'white'
                        }}>
                          Technology
                        </span>
                        <i className="menu-arrow"/>
                      </a>
                      <div className="collapse" id="technology-dropdown">
                        <ul className="nav flex-column sub-menu" style={{
                          // paddingLeft: '0px',
                          // fontSize: '15px',
                          // fontWeight: 'normal',
                          // fontStretch: 'normal',
                          // fontStyle: 'normal',
                          // lineHeight: 'normal',
                          // letterSpacing: 'normal',
                          // color: '#ffffff'
                        }}>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/technologys/technology-1.html" style= {{
                              // paddingLeft: '48px',
                              // paddingRight: '14px',
                              // width: '210px',
                              // height: '46px',
                              // borderRadius: '6px',
                              // backgroundColor: '#6672fb',
                              // marginTop: '10px'
                            }}>
                              Team 1
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/technologys/technology-2.html" style= {{
                              // paddingLeft: '48px',
                              // paddingRight: '14px',
                              // width: '210px',
                              // height: '46px',
                              // borderRadius: '6px',
                              // background: 'none',
                              // marginTop: '10px'
                            }}>
                            Team 2
                          </a>
                          </li>
                        </ul>
                        <button type="button" className="btn btn-add">
                          <img alt=""  className="img-xs" src={require("../../assets/images/side-bar/add-button.png")} style={{
                            width: '20px',
                            height: '20px',
                            marginRight: '8px'
                          }}/>
                          Add Position
                        </button>
                        <button type="button" className="btn btn-add btn-fw">
                          <i className="mdi mdi-plus" />Add Team
                        </button>
                      </div>
                    </li>
                    <li className="nav-item" style={{
                      width: '210px',
                      margin: 'auto'
                    }}>
                      <a className="nav-link" data-toggle="collapse" href="#marketing-dropdown" aria-expanded="false" aria-controls="marketing-dropdown" style= {{
                        paddingLeft: '14px',
                        paddingRight: '14px',
                        width: '210px',
                        height: '46px',
                        borderRadius: '6px'
                      }}>
                        <i className="menu-icon mdi mdi-tag-multiple" style={{
                          color: '#6E7193',
                          marginRight: '15px'
                        }}/>
                        <span className="menu-title" style={{
                          color: 'white'
                        }}>
                          Marketing
                        </span>
                        <i className="menu-arrow"/>
                      </a>
                      <div className="collapse" id="marketing-dropdown">
                        <ul className="nav flex-column sub-menu" style={{
                          paddingLeft: '0px',
                          fontSize: '15px',
                          fontWeight: 'normal',
                          fontStretch: 'normal',
                          fontStyle: 'normal',
                          lineHeight: 'normal',
                          letterSpacing: 'normal',
                          color: '#ffffff'
                        }}>
                          <li className="nav-item">
                            <a className="nav-link" href="index.html" style= {{
                              paddingLeft: '48px',
                              paddingRight: '14px',
                              width: '210px',
                              height: '46px',
                              borderRadius: '6px',
                              backgroundColor: '#6672fb',
                              marginTop: '10px'
                            }}>
                              Team 1
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/marketings/marketing-2.html" style= {{
                              paddingLeft: '48px',
                              paddingRight: '14px',
                              width: '210px',
                              height: '46px',
                              borderRadius: '6px',
                              background: 'none',
                              marginTop: '10px'
                            }}>
                            Team 2
                          </a>
                          </li>
                        </ul>
                        <button type="button" className="btn btn-success btn-fw">
                          <i className="mdi mdi-plus" />Add Position
                        </button>
                        <button type="button" className="btn btn-success btn-fw">
                          <i className="mdi mdi-plus" />Add Team
                        </button>
                      </div>
                    </li>
                    <li className="nav-item" style={{
                      width: '210px',
                      margin: 'auto'
                    }}>
                      <a className="nav-link" data-toggle="collapse" href="#sales-dropdown" aria-expanded="false" aria-controls="sales-dropdown" style= {{
                        paddingLeft: '14px',
                        paddingRight: '14px',
                        width: '210px',
                        height: '46px',
                        borderRadius: '6px'
                      }}>
                        <i className="menu-icon mdi mdi-chart-pie" style={{
                          color: '#6E7193',
                          marginRight: '15px'
                        }}/>
                        <span className="menu-title" style={{
                          color: 'white'
                        }}>
                          Sales
                        </span>
                        <i className="menu-arrow"/>
                      </a>
                      <div className="collapse" id="sales-dropdown">
                        <ul className="nav flex-column sub-menu" style={{
                          paddingLeft: '0px',
                          fontSize: '15px',
                          fontWeight: 'normal',
                          fontStretch: 'normal',
                          fontStyle: 'normal',
                          lineHeight: 'normal',
                          letterSpacing: 'normal',
                          color: '#ffffff'
                        }}>
                          <li className="nav-item">
                            <a className="nav-link" href="index.html" style= {{
                              paddingLeft: '48px',
                              paddingRight: '14px',
                              width: '210px',
                              height: '46px',
                              borderRadius: '6px',
                              backgroundColor: '#6672fb',
                              marginTop: '10px'
                            }}>
                              Team 1
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/saless/sales-2.html" style= {{
                              paddingLeft: '48px',
                              paddingRight: '14px',
                              width: '210px',
                              height: '46px',
                              borderRadius: '6px',
                              background: 'none',
                              marginTop: '10px'
                            }}>
                            Team 2
                          </a>
                          </li>
                        </ul>
                        <button type="button" className="btn btn-success btn-fw">
                          <i className="mdi mdi-plus" />Add Position
                        </button>
                        <button type="button" className="btn btn-success btn-fw">
                          <i className="mdi mdi-plus" />Add Team
                        </button>
                      </div>
                    </li>
                    <li className="nav-item" style={{
                      width: '210px',
                      margin: 'auto'
                    }}>
                      <a className="nav-link" data-toggle="collapse" href="#leagal-dropdown" aria-expanded="false" aria-controls="leagal-dropdown" style= {{
                        paddingLeft: '14px',
                        paddingRight: '14px',
                        width: '210px',
                        height: '46px',
                        borderRadius: '6px'
                      }}>
                        <i className="menu-icon mdi mdi-file-document" style={{
                          color: '#6E7193',
                          marginRight: '15px'
                        }}/>
                        <span className="menu-title" style={{
                          color: 'white'
                        }}>
                          Legal
                        </span>
                        <i className="menu-arrow"/>
                      </a>
                      <div className="collapse" id="leagal-dropdown">
                        <ul className="nav flex-column sub-menu" style={{
                          paddingLeft: '0px',
                          fontSize: '15px',
                          fontWeight: 'normal',
                          fontStretch: 'normal',
                          fontStyle: 'normal',
                          lineHeight: 'normal',
                          letterSpacing: 'normal',
                          color: '#ffffff'
                        }}>
                          <li className="nav-item">
                            <a className="nav-link" href="index.html" style= {{
                              paddingLeft: '48px',
                              paddingRight: '14px',
                              width: '210px',
                              height: '46px',
                              borderRadius: '6px',
                              backgroundColor: '#6672fb',
                              marginTop: '10px',
                              fontSize: '14px',
                              color: '#ffffff'
                            }}>
                              Team 1
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/leagals/leagal-2.html" style= {{
                              paddingLeft: '48px',
                              paddingRight: '14px',
                              width: '210px',
                              height: '46px',
                              borderRadius: '6px',
                              background: 'none',
                              marginTop: '10px',
                              fontSize: '14px',
                              color: 'red'
                            }}>
                            Team 2
                          </a>
                          </li>
                        </ul>
                        <button type="button" className="btn btn-success btn-fw">
                          <i className="mdi mdi-plus" />Add Position
                        </button>
                        <button type="button" className="btn btn-success btn-fw">
                          <i className="mdi mdi-plus" />Add Team
                        </button>
                      </div>
                    </li>
                    <li className="nav-item" style={{
                      width: '210px',
                      margin: 'auto'
                    }}>
                      <a className="nav-link" data-toggle="collapse" href="#operations-dropdown" aria-expanded="false" aria-controls="operation-dropdown" style= {{
                        paddingLeft: '14px',
                        paddingRight: '14px',
                        width: '210px',
                        height: '46px',
                        borderRadius: '6px'
                      }}>
                        <i className="menu-icon mdi mdi-settings" style={{
                          color: '#6E7193',
                          marginRight: '15px'
                        }}/>
                        <span className="menu-title" style={{
                          color: 'white'
                        }}>
                          Operations
                        </span>
                        <i className="menu-arrow"/>
                      </a>
                      <div className="collapse" id="operations-dropdown">
                        <ul className="nav flex-column sub-menu" style={{
                          paddingLeft: '0px',
                          fontSize: '15px',
                          fontWeight: 'normal',
                          fontStretch: 'normal',
                          fontStyle: 'normal',
                          lineHeight: 'normal',
                          letterSpacing: 'normal',
                          color: '#ffffff'
                        }}>
                          <li className="nav-item">
                            <a className="nav-link" href="index.html" style= {{
                              paddingLeft: '48px',
                              paddingRight: '14px',
                              width: '210px',
                              height: '46px',
                              borderRadius: '6px',
                              backgroundColor: '#6672fb',
                              marginTop: '10px'
                            }}>
                              Team 1
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/operationss/operations-2.html" style= {{
                              paddingLeft: '48px',
                              paddingRight: '14px',
                              width: '210px',
                              height: '46px',
                              borderRadius: '6px',
                              background: 'none',
                              marginTop: '10px'
                            }}>
                            Team 2
                          </a>
                          </li>
                        </ul>
                        <button type="button" className="btn btn-success btn-fw">
                          <i className="mdi mdi-plus" />Add Position
                        </button>
                        <button type="button" className="btn btn-success btn-fw">
                          <i className="mdi mdi-plus" />Add Team
                        </button>
                      </div>
                    </li>
                    <li className="nav-item" style={{
                      width: '210px',
                      margin: 'auto'
                    }}>
                      <a className="nav-link" data-toggle="collapse" href="#management-dropdown" aria-expanded="false" aria-controls="management-dropdown" style= {{
                        paddingLeft: '14px',
                        paddingRight: '14px',
                        width: '210px',
                        height: '46px',
                        borderRadius: '6px'
                      }}>
                        <i className="menu-icon mdi mdi-briefcase" style={{
                          color: '#6E7193',
                          marginRight: '15px'
                        }}/>
                        <span className="menu-title" style={{
                          color: 'white'
                        }}>
                          Management
                        </span>
                        <i className="menu-arrow"/>
                      </a>
                      <div className="collapse" id="management-dropdown">
                        <ul className="nav flex-column sub-menu" style={{
                          paddingLeft: '0px',
                          fontSize: '15px',
                          fontWeight: 'normal',
                          fontStretch: 'normal',
                          fontStyle: 'normal',
                          lineHeight: 'normal',
                          letterSpacing: 'normal',
                          color: '#ffffff'
                        }}>
                          <li className="nav-item">
                            <a className="nav-link" href="index.html" style= {{
                              paddingLeft: '48px',
                              paddingRight: '14px',
                              width: '210px',
                              height: '46px',
                              borderRadius: '6px',
                              backgroundColor: '#6672fb',
                              marginTop: '10px'
                            }}>
                              Team 1
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/managements/management-2.html" style= {{
                              paddingLeft: '48px',
                              paddingRight: '14px',
                              width: '210px',
                              height: '46px',
                              borderRadius: '6px',
                              background: 'none',
                              marginTop: '10px'
                            }}>
                            Team 2
                          </a>
                          </li>
                        </ul>
                        <button type="button" className="btn btn-success btn-fw">
                          <i className="mdi mdi-plus" />Add Position
                        </button>
                        <button type="button" className="btn btn-success btn-fw">
                          <i className="mdi mdi-plus" />Add Team
                        </button>
                      </div>
                    </li>

                    {/* <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#page-layouts" aria-expanded="false" aria-controls="page-layouts">
                        <i className="menu-icon mdi mdi-notification-clear-all" />
                        <span className="menu-title">Page Layouts</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="page-layouts">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/layout/boxed-layout.html">Boxed</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/layout/rtl-layout.html">RTL</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#apps-dropdown" aria-expanded="false" aria-controls="apps-dropdown">
                        <i className="menu-icon mdi mdi-dna" />
                        <span className="menu-title">Apps</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="apps-dropdown">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/apps/email.html">E-mail</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/apps/calendar.html">Calendar</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/apps/todo.html">Todo List</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/apps/gallery.html">Gallery</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/samples/widgets.html">
                        <i className="menu-icon mdi mdi-trackpad" />
                        <span className="menu-title">Widgets</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#sidebar-layouts" aria-expanded="false" aria-controls="sidebar-layouts">
                        <i className="menu-icon mdi mdi-texture" />
                        <span className="menu-title">SideBar Layouts</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="sidebar-layouts">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/layout/compact-menu.html">Compact menu</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/layout/sidebar-collapsed.html">Icon menu</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/layout/sidebar-hidden.html">SideBar Hidden</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/layout/sidebar-hidden-overlay.html">SideBar Overlay</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/layout/sidebar-fixed.html">SideBar Fixed</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <i className="menu-icon mdi mdi-content-copy" />
                        <span className="menu-title">Basic UI Elements</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/accordions.html">Accordions</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/badges.html">Badges</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/breadcrumbs.html">Breadcrumbs</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/modals.html">Modals</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/progress.html">Progress bar</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/pagination.html">Pagination</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/tabs.html">Tabs</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/typography.html">Typography</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/tooltips.html">Tooltips</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#ui-advanced" aria-expanded="false" aria-controls="ui-advanced">
                        <i className="menu-icon mdi mdi-lightbulb-outline" />
                        <span className="menu-title">Advanced Elements</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="ui-advanced">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/dragula.html">Dragula</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/clipboard.html">Clipboard</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/context-menu.html">Context menu</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/slider.html">Sliders</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/carousel.html">Carousel</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/colcade.html">Colcade</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/loaders.html">Loaders</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                        <i className="menu-icon mdi mdi-backup-restore" />
                        <span className="menu-title">Form elements</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="form-elements">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/forms/advanced_elements.html">Advanced Elements</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/forms/validation.html">Validation</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/forms/wizard.html">Wizard</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#editors" aria-expanded="false" aria-controls="editors">
                        <i className="menu-icon mdi mdi-code-brackets" />
                        <span className="menu-title">Editors</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="editors">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/forms/text_editor.html">Text editors</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/forms/code_editor.html">Code editors</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                        <i className="menu-icon mdi mdi-chart-line" />
                        <span className="menu-title">Charts</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="charts">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/morris.html">Morris</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/flot-chart.html">Flot</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/google-charts.html">Google charts</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/sparkline.html">Sparkline js</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/c3.html">C3 charts</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/chartist.html">Chartists</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/justGage.html">JustGage</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                        <i className="menu-icon mdi mdi-table" />
                        <span className="menu-title">Tables</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="tables">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/tables/data-table.html">Data table</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/tables/js-grid.html">Js-grid</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/tables/sortable-table.html">Sortable table</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/ui-features/popups.html">
                        <i className="menu-icon mdi mdi-shield-outline" />
                        <span className="menu-title">Popups</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/ui-features/notifications.html">
                        <i className="menu-icon mdi mdi-flag-outline" />
                        <span className="menu-title">Notifications</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                        <i className="menu-icon mdi mdi-sticker" />
                        <span className="menu-title">Icons</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="icons">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/icons/flag-icons.html">Flag icons</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/icons/font-awesome.html">Font Awesome</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/icons/simple-line-icon.html">Simple line icons</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/icons/themify.html">Themify icons</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#maps" aria-expanded="false" aria-controls="maps">
                        <i className="menu-icon mdi mdi-map-marker-circle" />
                        <span className="menu-title">Maps</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="maps">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/maps/mapeal.html">Mapeal</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/maps/vector-map.html">Vector Map</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/maps/google-maps.html">Google Map</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                        <i className="menu-icon mdi mdi-restart" />
                        <span className="menu-title">User Pages</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="auth">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/login.html"> Login </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/login-2.html"> Login 2 </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/register.html"> Register </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/register-2.html"> Register 2 </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/lock-screen.html"> Lockscreen </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
                        <i className="menu-icon mdi mdi-restart" />
                        <span className="menu-title">Error pages</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="error">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/error-404.html"> 404 </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/error-500.html"> 500 </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                        <i className="menu-icon mdi mdi-cube-outline" />
                        <span className="menu-title">General Pages</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="general-pages">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/landing-page.html"> Landing Page </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/profile.html"> Profile </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/faq.html"> FAQ </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/faq-2.html"> FAQ 2 </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/news-grid.html"> News grid </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/timeline.html"> Timeline </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/search-results.html"> Search Results </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/portfolio.html"> Portfolio </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#e-commerce" aria-expanded="false" aria-controls="e-commerce">
                        <i className="menu-icon mdi mdi-apple-keyboard-command" />
                        <span className="menu-title">E-commerce</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="e-commerce">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/invoice.html"> Invoice </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/pricing-table.html"> Pricing Table </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/orders.html"> Orders </a>
                          </li>
                        </ul>
                      </div>
                    </li> */}
                  </ul>
                </nav>
              </div>


        )

        const navLoggedOut = (
          <div style={{display:'none'}}>
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
                  <ul className="nav">
                    <li className="nav-item nav-profile">
                      <div className="nav-link">
                        <div className="user-wrapper">
                          <div className="profile-image">
                            <img src="/images/faces/face8.jpg" alt=""/> </div>
                          <div className="text-wrapper">
                            <p className="profile-name">Richard V.Welsh</p>
                            <div>
                              <small className="designation text-muted">Manager</small>
                              <span className="status-indicator online" />
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-success btn-block">New Project
                          <i className="mdi mdi-plus" />
                        </button>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#dashboard-dropdown" aria-expanded="false" aria-controls="dashboard-dropdown">
                        <i className="menu-icon mdi mdi-television" />
                        <span className="menu-title">Dashboard</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="dashboard-dropdown">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="index.html">Dashboard 1</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/dashboards/dashboard-2.html">Dashboard 2</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#page-layouts" aria-expanded="false" aria-controls="page-layouts">
                        <i className="menu-icon mdi mdi-notification-clear-all" />
                        <span className="menu-title">Page Layouts</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="page-layouts">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/layout/boxed-layout.html">Boxed</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/layout/rtl-layout.html">RTL</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#apps-dropdown" aria-expanded="false" aria-controls="apps-dropdown">
                        <i className="menu-icon mdi mdi-dna" />
                        <span className="menu-title">Apps</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="apps-dropdown">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/apps/email.html">E-mail</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/apps/calendar.html">Calendar</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/apps/todo.html">Todo List</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/apps/gallery.html">Gallery</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/samples/widgets.html">
                        <i className="menu-icon mdi mdi-trackpad" />
                        <span className="menu-title">Widgets</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#sidebar-layouts" aria-expanded="false" aria-controls="sidebar-layouts">
                        <i className="menu-icon mdi mdi-texture" />
                        <span className="menu-title">SideBar Layouts</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="sidebar-layouts">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/layout/compact-menu.html">Compact menu</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/layout/sidebar-collapsed.html">Icon menu</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/layout/sidebar-hidden.html">SideBar Hidden</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/layout/sidebar-hidden-overlay.html">SideBar Overlay</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/layout/sidebar-fixed.html">SideBar Fixed</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <i className="menu-icon mdi mdi-content-copy" />
                        <span className="menu-title">Basic UI Elements</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/accordions.html">Accordions</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/badges.html">Badges</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/breadcrumbs.html">Breadcrumbs</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/modals.html">Modals</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/progress.html">Progress bar</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/pagination.html">Pagination</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/tabs.html">Tabs</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/typography.html">Typography</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/tooltips.html">Tooltips</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#ui-advanced" aria-expanded="false" aria-controls="ui-advanced">
                        <i className="menu-icon mdi mdi-lightbulb-outline" />
                        <span className="menu-title">Advanced Elements</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="ui-advanced">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/dragula.html">Dragula</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/clipboard.html">Clipboard</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/context-menu.html">Context menu</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/slider.html">Sliders</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/carousel.html">Carousel</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/colcade.html">Colcade</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/loaders.html">Loaders</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                        <i className="menu-icon mdi mdi-backup-restore" />
                        <span className="menu-title">Form elements</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="form-elements">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/forms/advanced_elements.html">Advanced Elements</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/forms/validation.html">Validation</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/forms/wizard.html">Wizard</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#editors" aria-expanded="false" aria-controls="editors">
                        <i className="menu-icon mdi mdi-code-brackets" />
                        <span className="menu-title">Editors</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="editors">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/forms/text_editor.html">Text editors</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/forms/code_editor.html">Code editors</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                        <i className="menu-icon mdi mdi-chart-line" />
                        <span className="menu-title">Charts</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="charts">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/morris.html">Morris</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/flot-chart.html">Flot</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/google-charts.html">Google charts</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/sparkline.html">Sparkline js</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/c3.html">C3 charts</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/chartist.html">Chartists</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/charts/justGage.html">JustGage</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                        <i className="menu-icon mdi mdi-table" />
                        <span className="menu-title">Tables</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="tables">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/tables/data-table.html">Data table</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/tables/js-grid.html">Js-grid</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/tables/sortable-table.html">Sortable table</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/ui-features/popups.html">
                        <i className="menu-icon mdi mdi-shield-outline" />
                        <span className="menu-title">Popups</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/ui-features/notifications.html">
                        <i className="menu-icon mdi mdi-flag-outline" />
                        <span className="menu-title">Notifications</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                        <i className="menu-icon mdi mdi-sticker" />
                        <span className="menu-title">Icons</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="icons">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/icons/flag-icons.html">Flag icons</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/icons/font-awesome.html">Font Awesome</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/icons/simple-line-icon.html">Simple line icons</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/icons/themify.html">Themify icons</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#maps" aria-expanded="false" aria-controls="maps">
                        <i className="menu-icon mdi mdi-map-marker-circle" />
                        <span className="menu-title">Maps</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="maps">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/maps/mapeal.html">Mapeal</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/maps/vector-map.html">Vector Map</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/maps/google-maps.html">Google Map</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                        <i className="menu-icon mdi mdi-restart" />
                        <span className="menu-title">User Pages</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="auth">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/login.html"> Login </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/login-2.html"> Login 2 </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/register.html"> Register </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/register-2.html"> Register 2 </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/lock-screen.html"> Lockscreen </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
                        <i className="menu-icon mdi mdi-restart" />
                        <span className="menu-title">Error pages</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="error">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/error-404.html"> 404 </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/error-500.html"> 500 </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                        <i className="menu-icon mdi mdi-cube-outline" />
                        <span className="menu-title">General Pages</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="general-pages">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/landing-page.html"> Landing Page </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/profile.html"> Profile </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/faq.html"> FAQ </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/faq-2.html"> FAQ 2 </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/news-grid.html"> News grid </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/timeline.html"> Timeline </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/search-results.html"> Search Results </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/portfolio.html"> Portfolio </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="collapse" href="#e-commerce" aria-expanded="false" aria-controls="e-commerce">
                        <i className="menu-icon mdi mdi-apple-keyboard-command" />
                        <span className="menu-title">E-commerce</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="collapse" id="e-commerce">
                        <ul className="nav flex-column sub-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/invoice.html"> Invoice </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/pricing-table.html"> Pricing Table </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/samples/orders.html"> Orders </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>


        )

        return ( //jsx is html inside javascript (but class is className)
          <div>
            {isAuthenticated ? navloggedIn : navLoggedOut}
          </div>
        );
    }
}

SideBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser, clearCurrentCompany })(withRouter(SideBar));
