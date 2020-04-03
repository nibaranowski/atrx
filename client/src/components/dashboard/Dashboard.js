import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTripByTripId, deleteTripByTripId } from '../../actions/tripActions';
//import { getAllTrips } from '../../actions/tripActions';
import Spinner from '../common/Spinner';
import TripActions from './TripActions';
import Experience from './Experience';
import Education from './Education';
import Trips from '../trip/trips/Trips';

class Dashboard extends Component {
    componentDidMount() {
    }

    onDeleteClick(e) {
        this.props.deleteTripByTripId();
    }

    render() {
       const { user } = this.props.auth;
       const { profile, loading } = this.props.profile;

       let dashboardContent;

       if (profile === null || loading) {
         dashboardContent = <Spinner />;
       } else {
         // Check if logged in user has profile data
         if (Object.keys(profile).length > 0) {
           dashboardContent = (
             <div>
               <p className="lead text-muted">
                 Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
               </p>
               <TripActions />
               <Experience experience={profile.experience} />
               <Education education={profile.education} />
               <div style={{ marginBottom: '60px' }} />
               <button
                 onClick={this.onDeleteClick.bind(this)}
                 className="btn btn-danger"
               >
                 Delete My Account
               </button>
             </div>
           );
         } else {
           // User is logged in but has no profile
           dashboardContent = (
             <div>
               <p className="lead text-muted">Welcome {user.name}</p>
               <p>You have not yet setup a profile, please add some info</p>
               <Link to="/create-profile" className="btn btn-lg btn-info">
                 Create Profile
               </Link>
               <Trips user={user} />
             </div>
           );
         }
       }


    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
    getTripByTripId: PropTypes.func.isRequired,
    deleteTripByTripId: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    trip: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    trip: state.trip,
    auth: state.auth
});

export default connect(mapStateToProps, { getTripByTripId, deleteTripByTripId })(Dashboard);
