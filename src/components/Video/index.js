import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

const Video = ({ activeModule, activeLesson }) => (
  <div id="video">
    <strong>Modulo: {activeModule.title}</strong>
    <span>Aula: {activeLesson.title}</span>
  </div>
);

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule
}))(Video);
