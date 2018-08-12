import * as React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';

import { createKit } from './map-actions';
import Map from './Map';

const mapStateToProps = (state) => ({
  map: state.map,
});

const mapDispatchToProps = (dispatch) => ({
  createKit: (typeID) => dispatch(createKit(uuid(), typeID)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
