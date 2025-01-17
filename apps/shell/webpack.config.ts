import { composePlugins, ModuleFederationConfig, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';

import baseConfig from './module-federation.config';

const config = {
  ...baseConfig,
  devServer: {
    port: 4200, // or your app's dev port
    hot: true,
    liveReload: true,
  },
} as ModuleFederationConfig;

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config, { dts: false }),
);
