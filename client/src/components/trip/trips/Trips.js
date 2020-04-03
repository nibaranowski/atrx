import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../common/Spinner';
import { getAllTripsByUserId } from '../../../actions/tripActions';
import TripItem from './TripItem';
import NavTree from '../../layout/NavTree';

class Trips extends Component {
  componentDidMount() {
    if (this.props.match.params.user_id) {
      this.props.getAllTripsByUserId(this.props.match.params.user_id);
      console.log('this props - trips: ', this.props)
    }
  }

  render() {
    const { trips } = this.props.trip;
    //const trips = null
    let tripItems = <Spinner />
    if (trips) { // check if there is a trip
        tripItems = trips.map(trip => (
            <TripItem key={trip._id} trip={trip} />
        ))
    } else {
      tripItems = <p>You haven't created a trip Yet.</p>
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
                        <h4 className="card-title">Trips</h4>
                        <p className="card-description">List of all your trips</p>
                      </div>
                      <div className="col-6">
                        <Link to={`/user/${this.props.match.params.user_id}/create-trip`}>
                          <button type="button" className="btn btn-success btn-fw float-right">Create Trip</button>
                        </Link>
                      </div>
                    </div>
                    {tripItems}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Trips.propTypes = {
  getAllTripsByUserId: PropTypes.func.isRequired,
  trip: PropTypes.object.isRequired,
  stop: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  trip: state.trip,
  stop: state.stop,
});

export default connect(mapStateToProps, { getAllTripsByUserId })(Trips);
