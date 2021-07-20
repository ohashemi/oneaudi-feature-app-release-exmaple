import * as React from 'react';
import * as ReactDom from 'react-dom';
import { FeatureAppContainer } from '@feature-hub/react';
import DemoIntegrator from './Integrator';
import appDefinition from '../FeatureHubAppDefinition';

ReactDom.render(
  <DemoIntegrator>
    <FeatureAppContainer featureAppId="my-feature-app" featureAppDefinition={appDefinition} />
  </DemoIntegrator>,
  document.getElementById('root')
);
