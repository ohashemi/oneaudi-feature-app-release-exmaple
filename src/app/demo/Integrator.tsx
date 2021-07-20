import * as React from 'react';
import * as styled from 'styled-components';
import * as FeatureHubReact from '@feature-hub/react';
import { defineExternals, loadAmdModule } from '@feature-hub/module-loader-amd';
import { createFeatureHub } from '@feature-hub/core';
import { FeatureHubContextProvider } from '@feature-hub/react';
import { createLogger } from './services/logger';

defineExternals({
  react: React,
  'styled-components': styled,
  '@feature-hub/react': FeatureHubReact,
});

const { featureAppManager } = createFeatureHub('oneaudi-os:feature-hub-demo-integrator', {
  featureServiceDefinitions: [createLogger()],
  moduleLoader: loadAmdModule,
  providedExternals: {
    react: '16.13.1',
    'react-dom': '16.13.1',
    'styled-components': '5.1.1',
    '@feature-hub/react': '2.7.0',
  },
});

export interface IntegratorProps {
  children: React.ReactNode;
}

const Integrator: React.FC<IntegratorProps> = ({ children }: IntegratorProps) => {
  return (
    // @ts-expect-error the manager seems to have a conflicting signature in FH/core and FH/react
    <FeatureHubContextProvider value={{ featureAppManager }}>{children}</FeatureHubContextProvider>
  );
};
export default Integrator;
