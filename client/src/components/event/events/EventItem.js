import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
//import momentjs  from 'moment';
//import pluralize  from 'pluralize';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import isEmpty from '../../../validation/is-empty';
import { deleteEventByEventId } from '../../../actions/eventActions';
import Events from '../../event/events/Events';
import $ from 'jquery';


class EventItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayEvents: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    $('button').on('click', function() {
      $(this).css({
        'background-color': 'transparent',
        'color': '#212529',
        'border': 'none',
        'outline': 'none',
        'padding-left': '26px',
        'padding-top': '7.5px',
        'padding-bottom': '7.5px'
      });
      $(this).find('span').delay(5000).text('Booked');
      $(this).find('div').delay(10000).show();
    })
  }

  onDeleteClick(e) {
    console.log('this.props in delete', this.props.event._id)
    this.props.deleteEventByEventId(this.props.event._id);
  }


  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
      const { displayEvents } = this.state;
      const { event } = this.props;
      //const headerBool = this.props.headerBool
      //var endTime = momentjs(event.endTime)
      //var startTime = momentjs(event.startTime)

      let eventsInput;

      if(displayEvents) {
        eventsInput = (
          <Events event={event}/>
        )
      }

      return (
        <div className="eventItem">
          <div className="card-event card-body bg-light mb-0 pl-3 pr-3" style={{paddingTop: '13px', paddingBottom: '13px', fontSize: '14px'}}>
            <div className="row">
              <div className="col-md-2 vcenter pt-0 float-left">
                <div className="pl-0 pr-0 ml-0 mr-0 float-left pb-0">
                  <div className="event-font pl-0 pr-0 ml-0 mr-2 float-left vcenter" style={{ maxWidth: '20px'}}>
                    <img alt="" src='/images/unchecked.png' className="mr-2 pr-0 vcenter" style={{ width: '100%'}}/>
                  </div>
                  <div className="event-font pl-0 pr-0 ml-0 mr-2 float-left vcenter" style={{ maxWidth: '20px'}}>
                    <img alt="" src={`/images/${event.type.toLowerCase()}.png`} className="mr-2 pr-0 pl-0" style={{ width: '100%'}}/>
                  </div>
                </div>
                <div className="event-font font-weight-bold pt-0 pl-0 pr-0 ml-0 mr-0">
                  {event.type}
                </div>
              </div>
              <div className="col-md-1 vcenter pr-0 pl-0">
                <span className="event-font pl-0 pr-0 ml-0 mr-0">
                  <Moment format="h a">{event.startTime}</Moment> - <Moment format="h a">{event.endTime}</Moment>
                </span>
              </div>
              <div className="col-md-1 vcenter">
                <span className="event-font pl-0 pr-0 ml-0 mr-0">
                  {event.location.substring(0, 6)}
                  {event.location.substring(0, 6).length === event.location.length ? null : ".."}
                </span>
              </div>
              <div className="col-md-2 vcenter pt-0">
                <div className="event-font pl-0 pr-0 ml-0 mr-0">
                  {event.title.substring(0, 12)}
                  {event.title.substring(0, 12).length === event.title.length ? null : ".."}
                </div>
              </div>
              <div className="col-md-1 vcenter">
                <span className="event-font pl-0 pr-0 ml-0 mr-0">
                  Relax
                </span>
              </div>
              <div className="col-md-1 vcenter">
                <span className="event-font pl-0 pr-0 ml-0 mr-0">
                  {event.budgetAllocation}
                </span>
              </div>
              <div className="col-md-1 vcenter">
                <span className="event-font pl-0 pr-0 ml-0 mr-0">
                  {event.price}
                </span>
              </div>
              <div className="col-md-3 vcenter">
                <div className="pl-0 pr-0 ml-0 mr-0 float-right" style={{paddingTop: '2px'}}>
                  <button
                    onClick={this.onDeleteClick.bind(this)}
                    className="btn btn-sm btn-link-white mr-2 pr-0 pl-0 vcenter"
                    style={{ maxWidth: '20px'}}
                  >
                    <img src="/images/delete-grey.png" className="mr-0 vcenter" style={{ width: '100%'}} alt=""/>
                  </button>

                  <Link to="/" className="btn btn-sm btn-link-white mr-2 pr-0 pl-0 vcenter" style={{ maxWidth: '20px'}}>
                    <img alt="" src="/images/edit-grey.png" className="mr-0 vcenter" style={{ width: '100%'}}/>
                  </Link>
                  <Link to="/" className="btn btn-sm btn-link-white mr-0 pr-0 pl-0 vcenter" style={{ maxWidth: '20px'}}>
                    <img alt="" src="/images/toggle-grey.png" className="mr-0 vcenter" style={{ width: '100%'}}/>
                  </Link>
                </div>
                <div className="event-font pl-0 pr-0 ml-0 mr-4 float-right vcenter">
                  <button to="/" id="book-event-button" className="btn btn-lg btn-info button float-right vcenter" >
                    <div className="event-font pl-0 pr-0 ml-0 mr-0 float-left vcenter" style={{ maxWidth: '20px', display: 'none'}}>
                      <img src='/images/booked.png' className="mr-0 pr-0 pb-1 vcenter" style={{ width: '100%'}} alt=""/>
                    </div>
                    <span>Book</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="events">
            {eventsInput}
          </div>
        </div>
      );
  }
}

EventItem.propTypes = {
  deleteEventByEventId: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
}

export default connect(null, { deleteEventByEventId })(EventItem);
