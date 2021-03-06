/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from 'strapi-helper-plugin';
// Utils
import pluginId from '../../pluginId';
// Containers
import ConfigPage from '../ConfigPage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path={`/plugins/${pluginId}/collection-entries`} component={ConfigPage} exact />
        <Route path={`/plugins/${pluginId}/custom-entries`} component={ConfigPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
