/**
 * This is the starting point of your application.
 * oneAudi OS and Feature Hub Apps will use this file to bootstrap the app.
 */
import * as React from 'react';
import { App, ProviderProps as AppProps } from '@volkswagen-onehub/oneaudi-os-react';
import Welcome from './components/welcome/Welcome';
import type { WelcomeProps } from './components/welcome/Welcome';

interface FeatureAppProps extends AppProps, WelcomeProps {}

const FeatureApp: React.FC<FeatureAppProps> = ({ exampleProp, ...inherited }: FeatureAppProps) => {
  return (
    <App {...inherited}>
      <Welcome exampleProp={exampleProp} />
    </App>
  );
};

export default FeatureApp;
