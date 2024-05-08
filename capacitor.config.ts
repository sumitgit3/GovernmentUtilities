import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dismilcalc.app',
  appName: 'Land Area Calculator',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
