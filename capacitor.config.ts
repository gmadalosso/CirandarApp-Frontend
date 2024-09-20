import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cirandar.app',
  appName: 'CirandarApp',
  webDir: 'www',
  server: {
    cleartext: true,
    androidScheme: 'http',
    hostname: '10.0.2.2',
    allowNavigation: ['10.0.2.2']
  }
};

export default config;
