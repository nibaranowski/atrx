import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../common/TextFieldGroup';
//import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
//import InputGroup from '../../common/InputGroup';
//import SelectListGroup from '../../common/SelectListGroup';
import { createEvent } from '../../../actions/eventActions';

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: '',
      handle: '',
      type: '',
      title: '',
      location: '',
      startTime: '',
      endTime: '',
      price: '',
      pctBooked: '',
      budgetAllocation: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }


  onSubmit(e) {
    e.preventDefault();


    const eventData = {
        trip : {
          _id: this.props.match.params.trip_id
        },
        stop : {
          _id: this.props.match.params.stop_id
        },
        day : {
          _id: this.props.match.params.day_id
        },
        order: this.state.order,
        handle: this.state.handle,
        type: this.state.type,
        title: this.state.title,
        location: this.state.location,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        price: this.state.price,
        pctBooked: this.state.pctBooked,
        budgetAllocation: this.state.budgetAllocation,
        errors: this.state.errors
    };

    this.props.createEvent(eventData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    const { errors } = this.state;

    //{/*let socialInputs;*/}

    // {/*if (displaySocialInputs) {
    //   socialInputs = (
    //     <div>
    //       <InputGroup
    //         placeholder="Twitter Event URL"
    //         name="twitter"
    //         icon="fab fa-twitter"
    //         value={this.state.twitter}
    //         onChange={this.onChange}
    //         error={errors.twitter}
    //       />
    //       <InputGroup
    //         placeholder="Facebook Page URL"
    //         name="facebook"
    //         icon="fab fa-facebook"
    //         value={this.state.facebook}
    //         onChange={this.onChange}
    //         error={errors.facebook}
    //       />
    //       <InputGroup
    //         placeholder="Linkedin Event URL"
    //         name="linkedin"
    //         icon="fab fa-linkedin"
    //         value={this.state.linkedin}
    //         onChange={this.onChange}
    //         error={errors.linkedin}
    //       />
    //       <InputGroup
    //         placeholder="YouTube Channel URL"
    //         name="youtube"
    //         icon="fab fa-youtube"
    //         value={this.state.youtube}
    //         onChange={this.onChange}
    //         error={errors.youtube}
    //       />
    //       <InputGroup
    //         placeholder="Instagram Page URL"
    //         name="instagram"
    //         icon="fab fa-instagram"
    //         value={this.state.instagram}
    //         onChange={this.onChange}
    //         error={errors.instagram}
    //       />
    //     </div>
    //   );
    // }*/}
    //
    // {/*// Select options for status
    // const options = [
    //   { label: '* Select Professional Status', value: 0 },
    //   { label: 'Developer', value: 'Developer' },
    //   { label: 'Junior Developer', value: 'Junior Developer' },
    //   { label: 'Senior Developer', value: 'Senior Developer' },
    //   { label: 'Manager', value: 'Manager' },
    //   { label: 'Student or Learning', value: 'Student or Learning' },
    //   { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
    //   { label: 'Intern', value: 'Intern' },
    //   { label: 'Other', value: 'Other' }
    // ];*/}

    return (
      <div className="event-actions">
        <div className="container">
          <div className="card card-body bg-light mb-3 mt-4">
            <div className="row">
              <div className="col-md-8 m-auto">
                <div className="text-center mt-4 mb-4">
                  <img className="h-50 w-50" src="/images/create.png" alt=""/>
                </div>
                <div className="mt-4">
                  <h1 className="display-4 text-center font-weight-bold">Create your Event</h1>
                  <p className="lead text-center">
                    Let's get some information to make your event
                  </p>
                  <small className="d-block pb-3">* = required fields</small>
                </div>
                <form className="mt-2" onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="* Order"
                    name="order"
                    value={this.state.order}
                    onChange={this.onChange}
                    error={errors.order}
                    info="A unique order for your event"
                  />
                  <TextFieldGroup
                    placeholder="* Event Handle"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                    error={errors.handle}
                    info="A unique handle for your event URL. Typically use your Event name without space"
                  />
                  <TextFieldGroup
                    placeholder="* Event Type"
                    name="type"
                    value={this.state.type}
                    onChange={this.onChange}
                    error={errors.type}
                    info="Write your event type"
                  />
                  <TextFieldGroup
                    placeholder="* Event Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                    error={errors.title}
                    info="Write your event title"
                  />
                  <TextFieldGroup
                    placeholder="Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                    error={errors.location}
                    info="Write your event location"
                  />
                  <TextFieldGroup
                    placeholder="Start Time"
                    name="startTime"
                    value={this.state.startTime}
                    onChange={this.onChange}
                    error={errors.startTime}
                    info="Write your event start time"
                  />
                  <TextFieldGroup
                    placeholder="End Time"
                    name="endTime"
                    value={this.state.endTime}
                    onChange={this.onChange}
                    error={errors.endTime}
                    info="Write your event end time"
                  />
                  <TextFieldGroup
                    placeholder="Price"
                    name="price"
                    value={this.state.price}
                    onChange={this.onChange}
                    error={errors.price}
                    info="Write your event price"
                  />
                  <TextFieldGroup
                    placeholder="Budget Allocation"
                    name="budgetAllocation"
                    value={this.state.budgetAllocation}
                    onChange={this.onChange}
                    error={errors.budgetAllocation}
                    info="Write your budget allocation"
                  />
                  {/*<SelectListGroup
                    placeholder="Status"
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange}
                    options={options}
                    error={errors.status}
                    info="Give us an idea of where you are at in your career"
                  />
                  <TextFieldGroup
                    placeholder="Company"
                    name="company"
                    value={this.state.company}
                    onChange={this.onChange}
                    error={errors.company}
                    info="Could be your own company or one you work for"
                  />
                  <TextFieldGroup
                    placeholder="Website"
                    name="website"
                    value={this.state.website}
                    onChange={this.onChange}
                    error={errors.website}
                    info="Could be your own website or a company one"
                  />
                  <TextFieldGroup
                    placeholder="Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                    error={errors.location}
                    info="City or city & state suggested (eg. Boston, MA)"
                  />
                  <TextFieldGroup
                    placeholder="* Skills"
                    name="skills"
                    value={this.state.skills}
                    onChange={this.onChange}
                    error={errors.skills}
                    info="Please use comma separated values (eg.
                      HTML,CSS,JavaScript,PHP"
                  />
                  <TextFieldGroup
                    placeholder="Github Tripname"
                    name="githubdayname"
                    value={this.state.githubdayname}
                    onChange={this.onChange}
                    error={errors.githubdayname}
                    info="If you want your latest repos and a Github link, include your dayname"
                  />
                  <TextAreaFieldGroup
                    placeholder="Short Bio"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                    error={errors.bio}
                    info="Tell us a little about yourself"
                  />
                  <div className="mb-3">
                    <button
                      type="button"
                      onClick={() => {
                        this.setState(prevState => ({
                          displaySocialInputs: !prevState.displaySocialInputs
                        }));
                      }}
                      className="btn btn-light"
                    >
                      Add Social Network Links
                    </button>
                    <span className="text-muted">Optional</span>
                  </div>
                  {socialInputs}*/}
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-info btn-block mt-5 mb-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateEvent.propTypes = {
  event: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  event: state.event,
  errors: state.errors
});
export default connect(mapStateToProps, { createEvent })(
  withRouter(CreateEvent)
);
