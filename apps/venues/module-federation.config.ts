import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'venues',
  exposes: {
    './Module': './src/remote-entry.ts',
    './menuItem': './src/app/components/index.ts',
  },
};

export default config;
