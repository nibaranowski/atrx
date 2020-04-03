import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../common/Spinner';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import isEmpty from '../../../validation/is-empty';
import EventItem from '../events/EventItem';

class EventHeader extends Component {
    componentDidMount() {
    }

    render() {
        const { event, loading } = this.props.event;
        let eventItem;

        if (event == null || loading) {
          eventItem = <Spinner />;
        } else {
          eventItem = <EventItem event={event} />
        }

    return (
      <div className="events">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {eventItem}
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
//         {isEmpty(event.bio) ? (
//           <span>{firstName} does not have a bio</span>
//         ) : (
//           <span>{event.bio}</span>
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

EventHeader.propTypes = {
  event: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    event: state.event
});

export default connect(mapStateToProps)(EventHeader);
