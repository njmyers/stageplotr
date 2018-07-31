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

/**
 * HOC to wrap a component with the appropriate kit values
 * Since kits are stored in a map as a hash table you must also pass in id.
 * This will access the correct hashed object from the table and subscribe
 * your component to the redux updates.
 */
const withKit = (id: string) => (Wrapped: React.ComponentType<any>) => {
  const mapStateToProps = (state) => ({
    ...state.map.kits[id],
  });

  const mapDispatchToProps = (dispatch) => ({
    updatePositionX: (value) => dispatch(updatePositionX(value)),
    updatePositionY: (value) => dispatch(updatePositionY(value)),
    updateScale: (value) => dispatch(updateScale(value)),
    updateRotation: (value) => dispatch(updateRotation(value)),
    updateLayer: (value) => dispatch(updateLayer(value)),
    updateOrientation: (bool) => dispatch(updateOrientation(bool)),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wrapped);
};

export default withKit;
