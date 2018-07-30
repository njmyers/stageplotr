import React from 'react';
import { withSiteData, Link } from 'react-static';

export default withSiteData(() => (
  <div>
    <h1>Future Home of Plotr</h1>
    <nav>
      <Link to="/edit">Plotr</Link>
    </nav>
  </div>
));
