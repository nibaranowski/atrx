import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/authActions';
import { clearCurrentCompany } from '../../actions/companyActions';
import Department from './Department';
import AddDepartment from './AddDepartment';

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
    const { isAuthenticated, user } = this.props.auth;

    const { company } = this.props.company;
    let sideBarContent;

    if (company === null) {
      sideBarContent = <div></div>
    } else {
      sideBarContent = (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-profile">
              <div className="nav-link" style={{
                  background: '#0E134B'
              }}>
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
                    <Link className="dropdown-item" to={`/admin-user/${this.props.auth.user.id}/company/${this.props.company.company._id}/define`} style={{
                      width: '210px'
                    }}>Define</Link>
                    <Link className="dropdown-item" to={`/admin-user/${this.props.auth.user.id}/company/${this.props.company.company._id}/hire`}>Hire</Link>
                    <Link className="dropdown-item" to={`/admin-user/${this.props.auth.user.id}/company/${this.props.company.company._id}/onboard`}>Onboard</Link>
                    <Link className="dropdown-item" to={`/admin-user/${this.props.auth.user.id}/company/${this.props.company.company._id}/coach`}>Coach</Link>
                    <Link className="dropdown-item" to={`/admin-user/${this.props.auth.user.id}/company/${this.props.company.company._id}/analyze`}>Analyze</Link>
                    <Link className="dropdown-item" to={`/admin-user/${this.props.auth.user.id}/company/${this.props.company.company._id}/terminate`}>Terminate</Link>
                    {/* <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/">Separated link</a> */}
                  </div>
                </div>
              </div>
            </li>
           <Department icon={"mdi-laptop-chromebook"} name={"Technology"} teamOneName={"IOS Team"} teamTwoName={"Android Team"} depId={"technology-dropdown"}/>
           <Department icon={"mdi-tag-multiple"} name={"Marketing"} teamOneName={"Inbound"} teamTwoName={"Outbound"} depId={"marketing-dropdown"}/>
           <Department icon={"mdi-chart-pie"} name={"Sales"} teamOneName={"Entreprise"} teamTwoName={"SMB"} depId={"sales-dropdown"}/>
           <Department icon={"mdi-file-document"} name={"Legal"} teamOneName={"Litigation"} teamTwoName={"Commercial"} depId={"legal-dropdown"}/>
           <Department icon={"mdi-settings"} name={"Operations"} teamOneName={"Performance"} teamTwoName={"Analytics"} depId={"operations-dropdown"}/>
           <Department icon={"mdi-briefcase"} name={"Management"} teamOneName={"Top"} teamTwoName={"Middle"} depId={"management-dropdown"}/>
           <AddDepartment userId={user.id}/>
          </ul>
        </nav>
      )
    }

    const navLoggedOut = null

    const navloggedIn = (
      <div>
        {sideBarContent}
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
    company: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    company: state.company
})

export default connect(mapStateToProps, { logoutUser, clearCurrentCompany })(withRouter(SideBar));
