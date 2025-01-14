import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'comms',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
export default config;
