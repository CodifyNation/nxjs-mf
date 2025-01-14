import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';

import baseConfig from './module-federation.config';

const prodConfig = {
  ...baseConfig,
  remotes: [
    ['comms', 'comms@http://localhost:3001/remoteEntry.js'],
    ['venues', 'venues@http://localhost:3002/remoteEntry.js'],
  ],
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig, { dts: false })
);
