// this file exists to future proof us if we want to easily switch to another storage
// method in the future

export function localStorageGet(key) {
  const localStorage = window.localStorage;
  return localStorage.getItem(key);
}

export function localStoragePut(key, value) {
  const localStorage = window.localStorage;
  localStorage.setItem(key, value);
}
