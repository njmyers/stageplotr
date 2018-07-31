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

type Props = {
  id: string,
};

/**
 * HOC to wrap a component with the appropriate kit values/methods
 * Since kits are stored in a map as a hash table you must also pass in id.
 * This will access the correct hashed object from the table and subscribe
 * your component to the redux updates.
 */
const withKitState = (id: string) => (Wrapped: React.ComponentType<Props>) => {
  const mapStateToProps = (state) => ({
    ...state.map.kits[id],
  });

  const mapDispatchToProps = (dispatch) => ({
    updatePositionX: (value) => dispatch(updatePositionX(value, id)),
    updatePositionY: (value) => dispatch(updatePositionY(value, id)),
    updateScale: (value) => dispatch(updateScale(value, id)),
    updateRotation: (value) => dispatch(updateRotation(value, id)),
    updateLayer: (value) => dispatch(updateLayer(value, id)),
    updateOrientation: (value) => dispatch(updateOrientation(value, id)),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wrapped);
};

export default withKitState;
