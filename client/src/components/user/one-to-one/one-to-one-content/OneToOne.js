import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import OneToOneDetails from './OneToOneDetails';
import OneToOneHeader from './OneToOneHeader';
import OneToOneViewFilter from './OneToOneViewFilter';
//import Stops from '../../stop/stops/Stops';
//import AddBox from './AddBox';
//import OneToOneCreds from './OneToOneCreds';
//import OneToOneGithub from './OneToOneGithub';
import Spinner from '../../../common/Spinner';
import { getOneToOneByOneToOneId } from '../../../../actions/user/oneToOneActions';
import NavTree from '../../../layout/NavTree';


//import NavHeader from '../../layout/NavHeader';


class OneToOne extends Component {
  componentDidMount() {
    if (this.props.match.params.oneToOne_id) {
      this.props.getOneToOneByOneToOneId(this.props.match.params.oneToOne_id);
    }
  }

  render() {
    const { oneToOne, loading } = this.props.oneToOne;
    let oneToOneContent;

    if (oneToOne === null || loading) {
      oneToOneContent = <Spinner />;
    } else {
      oneToOneContent = (
        <div>
          <div className="mb-4">
            <OneToOneHeader oneToOne={oneToOne} />
          </div>
          <div className="mb-4 ml-2">
            <OneToOneViewFilter oneToOne={oneToOne} />
          </div>
          {/* <Stops oneToOne={oneToOne} /> */}
          {/* <AddBox oneToOne={oneToOne} /> */}
        </div>
      );
    }

    return (
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-12">
                <NavTree />
                <div className="card">
                  <div className="card-body">
                    {oneToOneContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

OneToOne.propTypes = {
  getOneToOneByOneToOneId: PropTypes.func.isRequired,
  oneToOne: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  oneToOne: state.oneToOne
});

export default connect(mapStateToProps, { getOneToOneByOneToOneId })(OneToOne);
