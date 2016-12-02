'use strict';
import { connect } from 'react-redux';
import { Schedules } from '../components';

const mapStateToProps = (state, {navigator}) => {
  return {
    navigator
  }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const SchedulesContainer = connect(mapStateToProps, mapDispatchToProps)(Schedules);
export default SchedulesContainer;