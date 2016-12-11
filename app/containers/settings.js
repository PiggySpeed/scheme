'use strict';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { downloadPharmaCare } from '../actions/database';

import { Settings } from '../components';

const mapStateToProps = ({downloadContent}) => {
  return {
    downloadPharmaCareStatus: downloadContent.downloadPharmaCareStatus
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({downloadPharmaCare}, dispatch)
};
const SchedulesContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);
export default SchedulesContainer;