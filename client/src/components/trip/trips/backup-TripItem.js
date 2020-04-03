import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../../validation/is-empty';
import { connect } from 'react-redux';
import { deleteTripByTripId } from '../../../actions/tripActions';

class TripItem extends Component {

    onDeleteClick(e) {
      console.log('this.props. in delete', this.props.trip._id)
      this.props.deleteTripByTripId(this.props.trip._id);
    }

    render() {
        const { trip } = this.props;
        const headerBool = this.props.headerBool
        return (
        <div>
          <div className="row pt-3 pb-3 border-bottom">
            <div className="col-2 pr-0">
              <img src="/images/faces/face11.jpg" className="img-lg rounded ml-2" alt="profile figure" />
            </div>
            <div className="col-4">
              <div className="row">
                <p className="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Cost Rica Adventures</p>
                <small className="text-muted mb-0">A beautiful trip awaits you in 4 stops</small>
              </div>
              <div className="row">
                <div className="event py-3">
                  <div className="d-flex align-items-center">
                    <small className="text-muted">3 Travellers</small>
                    <div className="image-grouped ml-2">
                      <img src="/assets/images/faces/face20.jpg" alt="profile figure"/>
                      <img src="/assets/images/faces/face17.jpg" alt="profile figure"/>
                      <img src="/assets/images/faces/face14.jpg" alt="profile figure"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <ul class="list-star">
                <li>Nov 15th - Nov 29th (14 days)</li>
                <li>Mostly relaxing</li>
                <li>1499 USD pp.</li>
              </ul>
            </div>
            <div className="col-2">
              <div className="btn-group float-right mr-2">
                <button type="button" className="btn btn-primary">View</button>
                <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuSplitButton1">
                {/*<h6 className="dropdown-header">Settings</h6>*/}
                  <a className="dropdown-item" href="/">Edit</a>
                  <a className="dropdown-item" href="/">Delete</a>
                  <a className="dropdown-item" href="/">Share</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3 pb-3 border-bottom">
            <div className="col-2 pr-0">
              <img src="/images/faces/face11.jpg" className="img-lg rounded ml-2" alt="profile figure" />
            </div>
            <div className="col-4">
              <div className="row">
                <p className="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Cost Rica Adventures</p>
                <small className="text-muted mb-0">A beautiful trip awaits you in 4 stops</small>
              </div>
              <div className="row">
                <div className="event py-3">
                  <div className="d-flex align-items-center">
                    <small className="text-muted">3 Travellers</small>
                    <div className="image-grouped ml-2">
                      <img src="/assets/images/faces/face20.jpg" alt="profile figure"/>
                      <img src="/assets/images/faces/face17.jpg" alt="profile figure"/>
                      <img src="/assets/images/faces/face14.jpg" alt="profile figure"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <ul class="list-star">
                <li>Nov 15th - Nov 29th (14 days)</li>
                <li>Mostly relaxing</li>
                <li>1499 USD pp.</li>
              </ul>
            </div>
            <div className="col-2">
              <div className="btn-group float-right mr-2">
                <button type="button" className="btn btn-primary">View</button>
                <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuSplitButton1">
                {/*<h6 className="dropdown-header">Settings</h6>*/}
                  <a className="dropdown-item" href="/">Edit</a>
                  <a className="dropdown-item" href="/">Delete</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3 pb-3">
            <div className="col-2 pr-0">
              <img src="/images/faces/face11.jpg" className="img-lg rounded ml-2" alt="profile figure" />
            </div>
            <div className="col-4">
              <div className="row">
                <p className="text-dark font-weight-semibold mr-2 mb-0 no-wrap">{trip.name}</p>
                <small className="text-muted mb-0">A beautiful trip awaits you in 4 stops</small>
              </div>
              <div className="row">
                <div className="event py-3">
                  <div className="d-flex align-items-center">
                    <small className="text-muted">3 Travellers</small>
                    <div className="image-grouped ml-2">
                      <img src="/assets/images/faces/face20.jpg" alt="profile figure"/>
                      <img src="/assets/images/faces/face17.jpg" alt="profile figure"/>
                      <img src="/assets/images/faces/face14.jpg" alt="profile figure"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <ul class="list-star">
                <li>Nov 15th - Nov 29th (14 days)</li>
                <li>Mostly relaxing</li>
                <li>1499 USD pp.</li>
              </ul>
            </div>
            <div className="col-2">
              <div className="btn-group float-right mr-2">
                <button type="button" className="btn btn-primary">View</button>
                <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuSplitButton1">
                {/*<h6 className="dropdown-header">Settings</h6>*/}
                  <a className="dropdown-item" href="/">Edit</a>
                  <a className="dropdown-item" href="/">Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>

          // <div className="card card-body bg-light mb-3 pl-5 pr-5 pt-4 pb-4">
          //   <div className="row">
          //     <div className="col-md-4">
          //       <div className="row">
          //         <h1 className="display-4 font-weight-bold">
          //             {trip.name}
          //         </h1>
          //       </div>
          //       <div className="row">
          //         <p className="subtitle">
          //             A beautiful trip awaits you with <b>4 Stops</b>
          //         </p>
          //       </div>
          //       <div className="row mt-1">
          //         <div className="col-sm-3 pl-0 pr-0" style={{ marginTop: 'auto', marginBottom: 'auto'}}>
          //           <img className="avatar-custom mt-0" src="/images/ava1.png" style={{ marginRight: '-20px' }} title="ava1" />
          //           <img className="avatar-custom mt-0" src="/images/ava2.png" style={{ marginRight: '-20px' }} title="ava2" />
          //           <img className="avatar-custom mt-0" src="/images/ava3.png" style={{ marginRight: '-20px' }} title="ava3" />
          //         </div>
          //         <div className="col-sm-9" style={{ marginTop: 'auto', marginBottom: 'auto'}}>
          //           <span className="" style={{ fontSize: '16px' }} >
          //             <b>4</b> Co-travelers
          //           </span>
          //         </div>
          //       </div>
          //     </div>
          //     <div className="col-md-4">
          //       <ul className="list-unstyled ml-0 mb-0">
          //         <li className="mb-3">
          //           <span className="pull-left">
          //             <img src="/images/checkbox.png"  className="img-reponsive img-rounded mr-2" style={{ width: '7.5%', height: '7.5%'}}/>
          //           </span>
          //           <span style={{ fontSize: '14px'}}>Nov 29th to Dec 14th (15 days)</span>
          //         </li>
          //         <li className="mb-3">
          //           <span className="pull-left ">
          //             <img src="/images/checkbox.png"  className="img-reponsive img-rounded mr-2" style={{ width: '7.5%', height: '7.5%'}} />
          //           </span>
          //           <span style={{ fontSize: '14px'}}>Mostly relaxing</span>
          //         </li>
          //         <li className="mb-0">
          //           <span className="pull-left ">
          //             <img src="/images/checkbox.png"  className="img-reponsive img-rounded mr-2" style={{ width: '7.5%', height: '7.5%'}}/>
          //           </span>
          //           <span style={{ fontSize: '14px'}}>2400 USD pp</span>
          //         </li>
          //       </ul>
          //     </div>
          //     <div className="col-md-4 mt-0 mb-0">
          //       <div className="row justify-content-end h-80 mb-5">
          //         <button
          //           onClick={this.onDeleteClick.bind(this)}
          //           className="btn btn-sm btn-link mr-2 pr-0 pl-0 pt-0 pb-0"
          //           style={{ maxWidth: '20px'}}
          //         >
          //           <img src="/images/delete-grey.png" className="mr-0" style={{ width: '100%'}}/>
          //         </button>
          //         <Link to="/" className="btn btn-sm btn-link mr-0 pr-0 pl-0 pt-0 pb-0" style={{ maxWidth: '20px', paddingTop: 'auto', paddingBottom: 'auto'}}>
          //           <img src="/images/edit-grey.png" style={{ width: '100%'}}/>
          //         </Link>
          //       </div>
          //       {headerBool ? null : (
          //         <div className="row justify-content-end h-20">
          //           <Link to="/" className="btn btn-lg btn-light mr-2 pr-0 pl-0" style={{ paddingTop: 'auto', paddingBottom: 'auto'}}>
          //             <img src="/images/share.png" className="mr-1" style={{ width: '30%', lineHeight: '1.33'}} />
          //             Invite
          //           </Link>
          //           <Link to={`/trip/${trip._id}`} className="btn btn-lg btn-info">
          //             View
          //           </Link>
          //         </div>
          //       )}
          //     </div>
          //   </div>
          // </div>
        );
    }
}

{/*<div className="row">
    <h4>
        Skill Set
    </h4>
    <ul className="list-group">
        {trip.skills.slice(0,4).map((skill, index) => (
            <li key={index} className="list-group-item">
                <i className="fa fa-check pr-1" />
                {skill}
            </li>
        ))}
    </ul>
</div>*/}

TripItem.propTypes = {
  deleteTripByTripId: PropTypes.func.isRequired,
  trip: PropTypes.object.isRequired
}

export default connect(null, { deleteTripByTripId })(TripItem);
