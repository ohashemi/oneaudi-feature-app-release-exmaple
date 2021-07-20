import * as React from 'react';

export interface WelcomeProps {
  exampleProp?: unknown;
}

const Welcome: React.FC<WelcomeProps> = () => {
  return <h3 data-test-id="welcome">Welcome!</h3>;
};

export default Welcome;
