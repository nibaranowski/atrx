import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../common/TextFieldGroup';
//import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
//import InputGroup from '../../common/InputGroup';
//import SelectListGroup from '../../common/SelectListGroup';
import { createTrip, getTripByTripId } from '../../../actions/tripActions';
import isEmpty from '../../../validation/is-empty';

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      name: '',
      startLocation: '',
      endLocation: '',
      startTime: '',
      endTime: '',
      startFlight: '',
      endFlight: '',
      maxBudget: '',
      // tripProfile: {},
      // stops: {},
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getTripByTripId();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.trip.trip) {
      const trip = nextProps.trip.trip;
// {/*
//       // Bring skills array back to CSV
//       const skillsCSV = trip.skills.join(',');*/}

      // If trip field doesnt exist, make empty string

      trip.startLocation = !isEmpty(trip.startLocation) ? trip.startLocation : '';
      trip.endLocation = !isEmpty(trip.endLocation) ? trip.endLocation : '';
      trip.startTime = !isEmpty(trip.startTime) ? trip.startTime : '';
      trip.endTime = !isEmpty(trip.endTime) ? trip.endTime : '';
      trip.startFlight = !isEmpty(trip.startFlight) ? trip.startFlight : '';
      trip.endFlight = !isEmpty(trip.endFlight) ? trip.endFlight : '';
      trip.maxBudget = !isEmpty(trip.maxBudget) ? trip.maxBudget : '';

      // Set component fields state
      this.setState({
        handle: trip.handle,
        name: trip.name,
        startLocation: trip.startLocation,
        endLocation: trip.endLocation,
        startTime: trip.startTime,
        endTime: trip.endTime,
        startFlight: trip.startFlight,
        endFlight: trip.endFlight,
        maxBudget: trip.maxBudget,
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const tripData = {
      handle: this.state.handle,
      name: this.state.this.stateName,
      startLocation: this.state.startLocation,
      endLocation: this.state.endLocation,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      startFlight: this.state.startFlight,
      endFlight: this.state.endFlight,
      maxBudget: this.state.maxBudget,
    };

    this.props.createTrip(tripData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

//     {/*let socialInputs;
//
//     if (displaySocialInputs) {
//       socialInputs = (
//         <div>
//           <InputGroup
//             placeholder="Twitter Trip URL"
//             name="twitter"
//             icon="fab fa-twitter"
//             value={this.state.twitter}
//             onChange={this.onChange}
//             error={errors.twitter}
//           />
//
//           <InputGroup
//             placeholder="Facebook Page URL"
//             name="facebook"
//             icon="fab fa-facebook"
//             value={this.state.facebook}
//             onChange={this.onChange}
//             error={errors.facebook}
//           />
//
//           <InputGroup
//             placeholder="Linkedin Trip URL"
//             name="linkedin"
//             icon="fab fa-linkedin"
//             value={this.state.linkedin}
//             onChange={this.onChange}
//             error={errors.linkedin}
//           />
//
//           <InputGroup
//             placeholder="YouTube Channel URL"
//             name="youtube"
//             icon="fab fa-youtube"
//             value={this.state.youtube}
//             onChange={this.onChange}
//             error={errors.youtube}
//           />
//
//           <InputGroup
//             placeholder="Instagram Page URL"
//             name="instagram"
//             icon="fab fa-instagram"
//             value={this.state.instagram}
//             onChange={this.onChange}
//             error={errors.instagram}
//           />
//         </div>
//       );
//     }*/}
//
//     {/*// Select options for status
//     const options = [
//       { label: '* Select Professional Status', value: 0 },
//       { label: 'Developer', value: 'Developer' },
//       { label: 'Junior Developer', value: 'Junior Developer' },
//       { label: 'Senior Developer', value: 'Senior Developer' },
//       { label: 'Manager', value: 'Manager' },
//       { label: 'Student or Learning', value: 'Student or Learning' },
//       { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
//       { label: 'Intern', value: 'Intern' },
//       { label: 'Other', value: 'Other' }
//     ];
// */}
    return (
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit Trip</h1>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Trip Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your trip URL. Typically use your Trip name without space"
                />
                <TextFieldGroup
                  placeholder="* Trip Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                  info="Write your trip name"
                />
                <TextFieldGroup
                  placeholder="Start Location"
                  name="startLocation"
                  value={this.state.startLocation}
                  onChange={this.onChange}
                  error={errors.startLocation}
                  info="Write your trip start location"
                />
                <TextFieldGroup
                  placeholder="End Location"
                  name="endLocation"
                  value={this.state.endLocation}
                  onChange={this.onChange}
                  error={errors.endLocation}
                  info="Write your trip end location"
                />
                <TextFieldGroup
                  placeholder="Start Time"
                  name="startTime"
                  value={this.state.startTime}
                  onChange={this.onChange}
                  error={errors.startTime}
                  info="Write your trip start time"
                />
                <TextFieldGroup
                  placeholder="End Time"
                  name="endTime"
                  value={this.state.endTime}
                  onChange={this.onChange}
                  error={errors.endTime}
                  info="Write your trip end time"
                />
                <TextFieldGroup
                  placeholder="Start Flight"
                  name="startFlight"
                  value={this.state.startFlight}
                  onChange={this.onChange}
                  error={errors.startFlight}
                  info="Write your trip start flight"
                />
                <TextFieldGroup
                  placeholder="Max Budget"
                  name="maxBudget"
                  value={this.state.maxBudget}
                  onChange={this.onChange}
                  error={errors.maxBudget}
                  info="Write your trip end flight"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateTrip.propTypes = {
  createTrip: PropTypes.func.isRequired,
  getTripByTripId: PropTypes.func.isRequired,
  trip: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  trip: state.trip,
  errors: state.errors
});

export default connect(mapStateToProps, { createTrip, getTripByTripId })(
  withRouter(CreateTrip)
);
