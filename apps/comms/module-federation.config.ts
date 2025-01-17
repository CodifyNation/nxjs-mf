import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'comms',
  exposes: {
    './Module': './src/remote-entry.ts',
    './hello': '../../packages/hello/src/index.ts',
    './menuItem': './src/app/components/index.ts',
  },
};
export default config;
