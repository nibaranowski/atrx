import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../common/Spinner';
import { getAllEventsByDayId } from '../../../actions/eventActions';
import EventItem from './EventItem';
import EventListHeader from './EventListHeader';

class Events extends Component {

    constructor(props) {
      super(props)
      //const { order } = this.props;
      this.state = {
        dayTemp: this.props.day
      }
    }

    componentDidMount() {
      //const { order } = this.props;
      const day_id = this.props.day._id;

      if (day_id) {
        this.props.getAllEventsByDayId(day_id)
        //this.props.getDayByDayId(day_id)
      }

      console.log('this props - events: ', this.props)
    }

    render() {
      const { events } = this.props.event;
      //const events = null
      let eventItems = <Spinner />
      if (events) { // check if there is a event
          eventItems = events.map(event => (
              <EventItem key={event._id} event={event} />
          ))
      } else {
        eventItems = <p>You haven't created a trip Yet.</p>
      }


        return (

            <div className="events">
                <div className="container">
                    <div className="row">
                      <div className="col-md-12 pl-0 pr-0">
                        <EventListHeader />
                      </div>
                      <div className="col-md-12 pl-0 pr-0 mb-3 last-line">
                        {eventItems}
                      </div>
                    </div>
                    <div className="row mt-0 mb-3">
                      <div className="col-md-12 pr-1 pl-0">
                        <Link to={`/trip/${this.state.dayTemp.trip}/stop/${this.state.dayTemp.stop}/day/${this.state.dayTemp._id}/create-event`} className="btn btn-lg btn-link float-right light-grey-link pl-0 pr-0 pt-0 mb-1" style={{ textDecoration: 'none', marginTop:'-20px'}}>
                          <img className="vertical-align-custom pr-2 pb-1" src="/images/add-grey.png" title="add event" style={{ maxHeight: '16px'}} alt=""/>
                          <span style={{ verticalAlign: 'center', lineHeight: '1'}}>Add Event</span>
                        </Link>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

Events.propTypes = {
  getAllEventsByDayId: PropTypes.func.isRequired,
  trip: PropTypes.object.isRequired,
  stop: PropTypes.object.isRequired,
  day: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  trip: state.trip,
  stop: state.stop,
  event: state.event
});

export default connect(mapStateToProps, { getAllEventsByDayId })(Events);
