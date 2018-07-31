import * as React from 'react';
import { shallow } from 'enzyme';

const withShallowStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};

export default withShallowStore;
