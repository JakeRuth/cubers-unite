import request from 'superagent';

import {LOCAL_STORAGE_KEYS} from '../constants/LocalStorageKeys';

import {localStorageGet} from './localStorageWrapper';

const baseApiUrl = 'https://x7dn73ahp4.execute-api.us-east-1.amazonaws.com/dev';

export const requestWrapper = {
  post: (url, data, callback) => {
    request.post(baseApiUrl + url)
      .send(data)
      .set('Content-Type', 'application/json')
      .set('Authorization', localStorageGet(LOCAL_STORAGE_KEYS.USER_ID))
      .end(callback);
  },
  get: (url, data, callback) => {
    request.get(baseApiUrl + url)
      .send(data)
      .set('Content-Type', 'application/json')
      .set('Authorization', localStorageGet(LOCAL_STORAGE_KEYS.USER_ID))
      .end(callback);
  },
};
