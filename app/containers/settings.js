'use strict';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { downloadPharmaCare, downloadIds, initializeFirebase } from '../actions/database';

import { Settings } from '../components';

const mapStateToProps = ({downloadContent}) => {
  return {
    initializeFirebaseStatus: downloadContent.initializeFirebaseStatus,
    downloadPharmaCareStatus: downloadContent.downloadPharmaCareStatus,
    downloadIdsStatus: downloadContent.downloadIdsStatus
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({downloadPharmaCare, downloadIds, initializeFirebase}, dispatch)
};
const SchedulesContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);
export default SchedulesContainer;