import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import CoachDetails from './CoachDetails';
//import CoachHeader from './CoachHeader';
//import CoachViewFilter from './CoachViewFilter';
//import Stops from '../../stop/stops/Stops';
//import AddBox from './AddBox';
//import CoachCreds from './CoachCreds';
//import CoachGithub from './CoachGithub';
//import Spinner from '../../common/Spinner';
//import { getCoachByCoachId } from '../../actions/coach/coachActions';
//import NavTree from '../../layout/NavTree';


//import NavHeader from '../../layout/NavHeader';


class Coach extends Component {
  componentDidMount() {
    if (this.props.match.params.coach_id) {
      // this.props.getCoachByCoachId(this.props.match.params.coach_id);
    }
  }

  render() {
    // const { coach, loading } = this.props.coach;
    // let coachContent;

    // if (coach === null || loading) {
    //   coachContent = <Spinner />;
    // } else {
      // coachContent = (
      //   <div>
      //     <div className="mb-4">
      //       {/* <CoachHeader coach={coach} /> */}
      //     </div>
      //     <div className="mb-4 ml-2">
      //       {/* <CoachViewFilter coach={coach} /> */}
      //     </div>
      //     {/* <Stops coach={coach} /> */}
      //     {/* <AddBox coach={coach} /> */}
      //   </div>
      // );
    // }

    return (
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-12">
                {/* <NavTree /> */}
                <div className="card">
                  <div className="card-body">
                    <h4>This is Coach page</h4>
                    {/* {coachContent} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Coach.propTypes = {
  // getCoachByCoachId: PropTypes.func.isRequired,
  coach: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  coach: state.coach
});

export default connect(mapStateToProps, {
  // getCoachByCoachId
})(Coach);
