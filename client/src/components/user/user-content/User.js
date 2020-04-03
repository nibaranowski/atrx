import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import UserDetails from './UserDetails';
import UserHeader from './UserHeader';
import UserViewFilter from './UserViewFilter';
//import Stops from '../../stop/stops/Stops';
//import AddBox from './AddBox';
//import UserCreds from './UserCreds';
//import UserGithub from './UserGithub';
import Spinner from '../../common/Spinner';
import { getUserByUserId } from '../../../actions/userActions';
import NavTree from '../../layout/NavTree';


//import NavHeader from '../../layout/NavHeader';


class User extends Component {
  componentDidMount() {
    if (this.props.match.params.user_id) {
      this.props.getUserByUserId(this.props.match.params.user_id);
    }
  }

  render() {
    const { user, loading } = this.props.user;
    let userContent;

    if (user === null || loading) {
      userContent = <Spinner />;
    } else {
      userContent = (
        <div>
          <div className="mb-4">
            <UserHeader user={user} />
          </div>
          <div className="mb-4 ml-2">
            <UserViewFilter user={user} />
          </div>
          {/* <Stops user={user} /> */}
          {/* <AddBox user={user} /> */}
        </div>
      );
    }

    return (
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-12">
                <NavTree />
                <div className="card">
                  <div className="card-body">
                    {userContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

User.propTypes = {
  getUserByUserId: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { getUserByUserId })(User);
