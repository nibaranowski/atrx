import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import EventDetails from './EventDetails';
import EventHeader from './EventHeader';
import EventViewFilter from './EventViewFilter';
import Events from '../../event/events/Events';
//import EventCreds from './EventCreds';
//import EventGithub from './EventGithub';
import Spinner from '../../common/Spinner';
import { getEventByEventId } from '../../../actions/eventActions';

import NavHeader from '../../layout/NavHeader';


class Event extends Component {
  componentDidMount() {
    if (this.props.match.params.event_id) {
      this.props.getEventByEventId(this.props.match.params.event_id);
    }
  }

  render() {
    const { event , loading } = this.props.event;
    let eventContent;

    if (event === null || loading) {
      eventContent = <Spinner />;
    } else {
      eventContent = (
        <div>
          <div className="row">
            <div className="col-md-12">
              <NavHeader event={event} />
            </div>
          </div>
          <EventHeader event={event} />
          <EventViewFilter event={event} />
          <Events event={event} />
        </div>
      );
    }

    return (
      <div className="event">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{eventContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  getEventByEventId: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  event: state.event
});

export default connect(mapStateToProps, { getEventByEventId })(Event);
