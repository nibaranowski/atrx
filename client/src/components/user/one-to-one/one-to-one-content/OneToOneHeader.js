import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../../common/Spinner';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import isEmpty from '../../../validation/is-empty';
import OneToOneItem from '../one-to-ones-content/OneToOneItem';

class OneToOneHeader extends Component {
    componentDidMount() {
    }

    render() {
        const { oneToOne, loading } = this.props.oneToOne;
        let oneToOneItem;

        if (oneToOne == null || loading) {
          oneToOneItem = <Spinner />;
        } else {
          oneToOneItem = <OneToOneItem oneToOne={oneToOne} headerBool={1}/>
        }

    return (
      <div className="oneToOnes">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {oneToOneItem}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// {/*<div className="row">
//   <div className="col-md-12">
//     <div className="card card-body bg-light mb-3">
//       <h3 className="text-center text-info">{firstName}'s Bio</h3>
//       <p className="lead">
//         {isEmpty(oneToOne.bio) ? (
//           <span>{firstName} does not have a bio</span>
//         ) : (
//           <span>{oneToOne.bio}</span>
//         )}
//       </p>
//       <hr />
//       <h3 className="text-center text-info">Skill Set</h3>
//       <div className="row">
//         <div className="d-flex flex-wrap justify-content-center align-items-center">
//           {skills}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>*/}

OneToOneHeader.propTypes = {
  oneToOne: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    oneToOne: state.oneToOne
});

export default connect(mapStateToProps)(OneToOneHeader);
