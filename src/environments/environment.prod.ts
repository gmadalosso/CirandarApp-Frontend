export const PORT = 5001;

export const backendUrl = {
  local: `http://localhost:${PORT}`,
  emulator: `http://10.0.2.2:${PORT}`,
}

const currentEnv = 'emulator';

export const environment = {
  production: true,
  apiUrl: `${backendUrl[currentEnv]}/api`,
};
console.log('Using API URL (PROD):', environment.apiUrl);
