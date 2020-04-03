import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import TripDetails from './TripDetails';
import TripHeader from './TripHeader';
import TripViewFilter from './TripViewFilter';
import Stops from '../../stop/stops/Stops';
//import AddBox from './AddBox';
//import TripCreds from './TripCreds';
//import TripGithub from './TripGithub';
import Spinner from '../../common/Spinner';
import { getTripByTripId } from '../../../actions/tripActions';
import NavTree from '../../layout/NavTree';


//import NavHeader from '../../layout/NavHeader';


class Trip extends Component {
  componentDidMount() {
    if (this.props.match.params.trip_id) {
      this.props.getTripByTripId(this.props.match.params.trip_id);
    }
  }

  render() {
    const { trip, loading } = this.props.trip;
    let tripContent;

    if (trip === null || loading) {
      tripContent = <Spinner />;
    } else {
      tripContent = (
        <div>
          <div className="mb-4">
            <TripHeader trip={trip} />
          </div>
          <div className="mb-4 ml-2">
            <TripViewFilter trip={trip} />
          </div>
          <Stops trip={trip} />
          {/* <AddBox trip={trip} /> */}
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
                    {tripContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Trip.propTypes = {
  getTripByTripId: PropTypes.func.isRequired,
  trip: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  trip: state.trip
});

export default connect(mapStateToProps, { getTripByTripId })(Trip);
