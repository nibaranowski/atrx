import React, { Component } from 'react';
//import Moment from 'react-moment';
//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import isEmpty from '../../../validation/is-empty';


class EventListHeader extends Component {

  render() {
      return (
        <div className="eventListHeader">
          <div className="card-header card-body bg-light mb-0 pl-3 pr-3" style={{paddingTop: '13px', paddingBottom: '13px', fontSize: '14px', border: 'none'}}>
            <div className="row">
              <div className="col-md-2 vcenter pt-0 float-left">
                <div className="pl-0 pr-0 ml-0 mr-0 float-left pb-0">
                  <div className="event-font pl-0 pr-0 ml-0 mr-2 float-left vcenter" style={{ maxWidth: '20px'}}>
                    <img src="/images/unchecked.png" className="mr-2 pr-0 vcenter" style={{ width: '100%'}} alt=""/>
                  </div>
                </div>
                <div className="event-font font-weight-bold pt-0 pl-0 pr-0 ml-0 mr-0">
                  Type
                </div>
              </div>
              <div className="col-md-1 font-weight-bold vcenter pr-0 pl-0">
                <div className="event-font font-weight-bold pt-0 pl-0 pr-0 ml-0 mr-0">
                  Hour
                </div>
              </div>
              <div className="col-md-1 font-weight-bold vcenter">
                <div className="event-font font-weight-bold pt-0 pl-0 pr-0 ml-0 mr-0">
                  Location
                </div>
              </div>
              <div className="col-md-2 font-weight-bold vcenter pt-0">
                <div className="event-font font-weight-bold pt-0 pl-0 pr-0 ml-0 mr-0">
                  Title
                </div>
              </div>
              <div className="col-md-1 font-weight-bold vcenter">
                <span className="event-font pl-0 pr-0 ml-0 mr-0">
                  Balance
                </span>
              </div>
              <div className="col-md-1 font-weight-bold vcenter">
                <span className="event-font pl-0 pr-0 ml-0 mr-0">
                  Budget
                </span>
              </div>
              <div className="col-md-1 font-weight-bold vcenter">
                <span className="event-font pl-0 pr-0 ml-0 mr-0">
                  Price
                </span>
              </div>
              <div className="col-md-3 vcenter">
              </div>
            </div>
          </div>
        </div>
      );
  }
}


export default EventListHeader;
