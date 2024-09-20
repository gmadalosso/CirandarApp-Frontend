// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const PORT = 5001;

export const backendUrl = {
  local: `http://localhost:${PORT}`,
  emulator: `http://10.0.2.2:${PORT}`,
}

const currentEnv = 'emulator';

export const environment = {
  production: false,
  apiUrl: `${backendUrl[currentEnv]}/api`,
};
console.log('Using API URL (LOCAL):', environment.apiUrl);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
