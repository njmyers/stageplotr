// @flow
import * as React from 'react';
import { connect } from 'react-redux';
// actions
import {
  updatePositionX,
  updatePositionY,
  updateScale,
  updateRotation,
  updateLayer,
  updateOrientation,
} from './kit-actions';
// component
import Kit from './Kit';

type Props = {
  id: string,
};

const mapStateToProps = (state, { id }) => ({
  ...state.map.kits[id],
});

const mapDispatchToProps = (dispatch, { id }) => ({
  updatePositionX: (value) => dispatch(updatePositionX(value, id)),
  updatePositionY: (value) => dispatch(updatePositionY(value, id)),
  updateScale: (value) => dispatch(updateScale(value, id)),
  updateRotation: (value) => dispatch(updateRotation(value, id)),
  updateLayer: (value) => dispatch(updateLayer(value, id)),
  updateOrientation: (value) => dispatch(updateOrientation(value, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kit);
