import React, { Component } from 'react';
import isEmpty from '../../../validation/is-empty';

class OneToOneDetails extends Component {
  render() {
    const { oneToOne } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                {/*<img
                  className="rounded-circle"
                  src={oneToOne.user.avatar}
                  alt=""
                />*/}
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{oneToOne.user.name}</h1>
              <p className="lead text-center">
                {oneToOne.status}{' '}
                {isEmpty(oneToOne.company) ? null : (
                  <span>at {oneToOne.company}</span>
                )}
              </p>
              {isEmpty(oneToOne.location) ? null : <p>{oneToOne.location}</p>}
              <p>
                {isEmpty(oneToOne.website) ? null : (
                  <a
                    className="text-white p-2"
                    href={oneToOne.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}

                {isEmpty(oneToOne.social && oneToOne.social.twitter) ? null : (
                  <a
                    className="text-white p-2"
                    href={oneToOne.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                )}

                {isEmpty(oneToOne.social && oneToOne.social.facebook) ? null : (
                  <a
                    className="text-white p-2"
                    href={oneToOne.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}

                {isEmpty(oneToOne.social && oneToOne.social.linkedin) ? null : (
                  <a
                    className="text-white p-2"
                    href={oneToOne.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                )}

                {isEmpty(oneToOne.social && oneToOne.social.youtube) ? null : (
                  <a
                    className="text-white p-2"
                    href={oneToOne.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}

                {isEmpty(oneToOne.social && oneToOne.social.instagram) ? null : (
                  <a
                    className="text-white p-2"
                    href={oneToOne.social.instagram}
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

export default OneToOneDetails;
