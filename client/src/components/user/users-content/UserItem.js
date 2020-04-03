import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import isEmpty from '../../../validation/is-empty';
import { connect } from 'react-redux';
import { deleteUserByUserId } from '../../../actions/userActions';

class UserItem extends Component {

    onDeleteClick(e) {
      console.log('this.props. in delete', this.props.user._id)
      this.props.deleteUserByUserId(this.props.user._id);
    }

    render() {
        // const noStyle = {
        //   all: 'unset',
        // };
        const { user } = this.props;
        //const headerBool = this.props.headerBool
        return (
        <div>
          <div className="row pt-3 pb-3 border-bottom">
            <div className="col-2 pr-0">
              <img src="/images/faces/face11.jpg" className="img-lg rounded ml-2" alt=""/>
            </div>
            <div className="col-4">
              <div className="row">
                <p className="text-dark font-weight-semibold mr-2 mb-0 no-wrap">{user.name}</p>
                <small className="text-muted mb-0">A beautiful user awaits you in 4 stops</small>
              </div>
              <div className="row">
                <div className="event py-3">
                  <div className="d-flex align-items-center">
                    <small className="text-muted">3 Travellers</small>
                    <div className="image-grouped ml-2">
                      <img src="/assets/images/faces/face20.jpg" alt=""/>
                      <img src="/assets/images/faces/face17.jpg" alt=""/>
                      <img src="/assets/images/faces/face14.jpg" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <ul className="list-star">
                <li className="mb-1">Nov 15th - Nov 29th (14 days)</li>
                <li className="mb-1">Mostly relaxing</li>
                <li>1499 USD pp.</li>
              </ul>
            </div>
            <div className="col-2">
              <div className="btn-group float-right mr-2">
                <Link to={`/user/${user._id}`} className="btn btn-primary">
                  View
                </Link>
                <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuSplitButton1">
                {/*<h6 className="dropdown-header">Settings</h6>*/}
                  <Link className="dropdown-item" to={`/user/${this.props.user._id}/edit-user`}>Edit</Link>
                  <a className="dropdown-item" onClick={this.onDeleteClick.bind(this)} href="/#">Delete</a>
                  <a className="dropdown-item" href="/#" disabled="disabled">Invite</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
    }
}


UserItem.propTypes = {
  deleteUserByUserId: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default connect(null, { deleteUserByUserId })(UserItem);
