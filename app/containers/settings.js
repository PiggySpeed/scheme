'use strict';
import { connect } from 'react-redux';
import { Settings } from '../components';
import { bindActionCreators } from 'redux';
import {} from '../actions/pharmacare';

const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
};
const SchedulesContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);
export default SchedulesContainer;