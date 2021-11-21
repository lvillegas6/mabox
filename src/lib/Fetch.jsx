import axios from 'axios';
import { config } from '@/config';

import { signOut } from '@/store/auth';
import { store } from '@/store';

export class Fetch {
  constructor() {
    this.json = {
      ignoreTypeError: null,
      headers: {
        'Content-Type': 'application/json'
      },
    };
  }

  setMethod(type = 'get') {
    this.json.method = type;
    return this;
  }

  setUrl(url) {
    this.json.url = config.api + url;
    return this;
  }

  removeHeaders() {
    this.json.headers = {};
    return this;
  }

  setData(json) {
    const data = JSON.stringify(json);
    this.json.data = data;
    return this;
  }

  setFormData(formData) {
    this.json.headers = {
      ...this.json.headers,
      'Content-Type': 'multipart/form-data',
    };
    this.json.data = formData;
    return this;
  }

  setAuthorization() {
    this.json.headers = {
      ...this.json.headers,
      'Authorization': Fetch.getUserTokenInStore(),
    };
    return this;
  }

  setCancelToken({ token } = { source: { token: null } }) {
    if (!token) { return this; }

    this.json.cancelToken = token;
    return this;
  }

  setIgnoreTypeError(type = null) {
    this.json.ignoreTypeError = type;
    return this;
  }

  async send() {
    if (!('url' in this.json)) throw new Error('You need a url');
    return axios(this.json)
      .then((response) => Fetch.transformResponse({ response }))
      .catch(Fetch.transformError);
  }

  static getUserTokenInStore() {
    const { jwt } = store.getState().auth;
    return jwt || undefined;
  }

  static transformError(error) {
    if (error.message === 'Request failed with status code 401') {
      store.dispatch(signOut());
      return;
    }
    throw error.message
  }

  static transformResponse({ ignoreTypeError, response }) {
    const {
      status, data, list, message,
    } = response.data;


    if (!(ignoreTypeError === message) && !status) {
      const errorBloom = {
        message,
        data,
      };

      throw errorBloom;
    }

    return {
      status: status || false,
      data: data,
      message: message || null,
      list,
    };
  }
}
