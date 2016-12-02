'use strict';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Splash from '../components/splash/splash';

const mapStateToProps = (state, {navigator}) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return {
    navigator
  }
};
const SplashContainer = connect(mapStateToProps, mapDispatchToProps)(Splash);
export default SplashContainer;