// this file exists to future proof us if we want to easily switch to another storage
// method in the future

export function localStorageGet(key) {
  return window.localStorage.getItem(key);
}

export function localStoragePut(key, value) {
  window.localStorage.setItem(key, value);
}

export function localStorageClear() {
  window.localStorage.clear()
}
