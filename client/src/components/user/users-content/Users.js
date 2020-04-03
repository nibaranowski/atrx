import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../common/Spinner';
import { getAllUsersByPositionId } from '../../../actions/userActions';
import UserItem from './UserItem';
import NavTree from '../../layout/NavTree';

class Users extends Component {
  componentDidMount() {
    if (this.props.match.params.user_id) {
      this.props.getAllUsersByUserId(this.props.match.params.user_id);
      console.log('this props - users: ', this.props)
    }
  }

  render() {
    const { users } = this.props.user;
    //const users = null
    let userItems = <Spinner />
    if (users) { // check if there is a user
        userItems = users.map(user => (
            <UserItem key={user._id} user={user} />
        ))
    } else {
      userItems = <p>You haven't created a user Yet.</p>
    }

      return (
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-12">
                <NavTree />
                <div className="card">
                  <div className="card-body">
                    <div className="row mb-2">
                      <div className="col-6">
                        <h4 className="card-title">Users</h4>
                        <p className="card-description">List of all your users</p>
                      </div>
                      <div className="col-6">
                        <Link to={`/user/${this.props.match.params.user_id}/create-user`}>
                          <button type="button" className="btn btn-success btn-fw float-right">Create User</button>
                        </Link>
                      </div>
                    </div>
                    {userItems}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Users.propTypes = {
  getAllUsersByUserId: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  stop: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user,
  stop: state.stop,
});

export default connect(mapStateToProps, { getAllUsersByPositionId })(Users);
