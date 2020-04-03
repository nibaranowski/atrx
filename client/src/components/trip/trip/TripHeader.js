import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../common/Spinner';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import isEmpty from '../../../validation/is-empty';
import TripItem from '../trips/TripItem';

class TripHeader extends Component {
    componentDidMount() {
    }

    render() {
        const { trip, loading } = this.props.trip;
        let tripItem;

        if (trip == null || loading) {
          tripItem = <Spinner />;
        } else {
          tripItem = <TripItem trip={trip} headerBool={1}/>
        }

    return (
      <div className="trips">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {tripItem}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// {/*<div className="row">
//   <div className="col-md-12">
//     <div className="card card-body bg-light mb-3">
//       <h3 className="text-center text-info">{firstName}'s Bio</h3>
//       <p className="lead">
//         {isEmpty(trip.bio) ? (
//           <span>{firstName} does not have a bio</span>
//         ) : (
//           <span>{trip.bio}</span>
//         )}
//       </p>
//       <hr />
//       <h3 className="text-center text-info">Skill Set</h3>
//       <div className="row">
//         <div className="d-flex flex-wrap justify-content-center align-items-center">
//           {skills}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>*/}

TripHeader.propTypes = {
  trip: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    trip: state.trip
});

export default connect(mapStateToProps)(TripHeader);
