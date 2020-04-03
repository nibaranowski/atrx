import React, { Component } from 'react';
import isEmpty from '../../../validation/is-empty';

class TripDetails extends Component {
  render() {
    const { trip } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                {/*<img
                  className="rounded-circle"
                  src={trip.user.avatar}
                  alt=""
                />*/}
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{trip.user.name}</h1>
              <p className="lead text-center">
                {trip.status}{' '}
                {isEmpty(trip.company) ? null : (
                  <span>at {trip.company}</span>
                )}
              </p>
              {isEmpty(trip.location) ? null : <p>{trip.location}</p>}
              <p>
                {isEmpty(trip.website) ? null : (
                  <a
                    className="text-white p-2"
                    href={trip.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}

                {isEmpty(trip.social && trip.social.twitter) ? null : (
                  <a
                    className="text-white p-2"
                    href={trip.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                )}

                {isEmpty(trip.social && trip.social.facebook) ? null : (
                  <a
                    className="text-white p-2"
                    href={trip.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}

                {isEmpty(trip.social && trip.social.linkedin) ? null : (
                  <a
                    className="text-white p-2"
                    href={trip.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                )}

                {isEmpty(trip.social && trip.social.youtube) ? null : (
                  <a
                    className="text-white p-2"
                    href={trip.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}

                {isEmpty(trip.social && trip.social.instagram) ? null : (
                  <a
                    className="text-white p-2"
                    href={trip.social.instagram}
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

export default TripDetails;
