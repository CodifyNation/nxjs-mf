import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';

import baseConfig from './module-federation.config';

const prodConfig = {
  ...baseConfig,
  remotes: [
    /*['about', 'https://jazzy-bublanina-a66402.netlify.app'],
    ['blog', 'https://celebrated-florentine-da1449.netlify.app'],*/
    ['store', 'store@http://localhost:3001/remoteEntry.js'],
  ],
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig, { dts: false })
);
