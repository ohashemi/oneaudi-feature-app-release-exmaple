/**
 * This is the entry point for Feature Hub App integration
 */

import * as React from 'react';
import { FeatureAppDefinition, FeatureAppEnvironment, FeatureServices } from '@feature-hub/core';
import { ReactFeatureApp } from '@feature-hub/react';
import type { Logger } from '@feature-hub/logger';
import App from './FeatureApp';

interface Dependencies extends FeatureServices {
  readonly 's2:logger'?: Logger;
}

const featureAppDefinition: FeatureAppDefinition<ReactFeatureApp, Dependencies> = {
  dependencies: {
    featureServices: {},
    externals: {
      react: '^16.12.0',
      'styled-components': '*',
    },
  },

  optionalDependencies: {
    featureServices: {
      's2:logger': '^1.0.0',
      's2:async-ssr-manager': '^1.0.0',
      's2:serialized-state-manager': '^1.0.0',
    },
  },

  create: ({ featureServices }: FeatureAppEnvironment<Dependencies, void>) => {
    const logger = featureServices['s2:logger'];
    logger?.info('Feature App created.');

    return {
      render: () => {
        return <App />;
      },
    };
  },
};

export default featureAppDefinition;
