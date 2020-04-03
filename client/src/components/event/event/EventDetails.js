import React, { Component } from 'react';
import isEmpty from '../../../validation/is-empty';

class EventDetails extends Component {
  render() {
    const { event } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                {/*<img
                  className="rounded-circle"
                  src={event.user.avatar}
                  alt=""
                />*/}
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{event.user.name}</h1>
              <p className="lead text-center">
                {event.status}{' '}
                {isEmpty(event.company) ? null : (
                  <span>at {event.company}</span>
                )}
              </p>
              {isEmpty(event.location) ? null : <p>{event.location}</p>}
              <p>
                {isEmpty(event.website) ? null : (
                  <a
                    className="text-white p-2"
                    href={event.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}

                {isEmpty(event.social && event.social.twitter) ? null : (
                  <a
                    className="text-white p-2"
                    href={event.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                )}

                {isEmpty(event.social && event.social.facebook) ? null : (
                  <a
                    className="text-white p-2"
                    href={event.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}

                {isEmpty(event.social && event.social.linkedin) ? null : (
                  <a
                    className="text-white p-2"
                    href={event.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                )}

                {isEmpty(event.social && event.social.youtube) ? null : (
                  <a
                    className="text-white p-2"
                    href={event.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}

                {isEmpty(event.social && event.social.instagram) ? null : (
                  <a
                    className="text-white p-2"
                    href={event.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer" 
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetails;
