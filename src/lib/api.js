import axios from 'axios';

const API_HOST = 'http://localhost';
const API_PORT = '5000';

const apiClientConfig = {
  _validateStatus(status) {
    // allow to go into `then`
    return (status >= 200 && status < 300) || (status >= 400 && status <= 403);
  },
  http(config, headers) {
    // return axios({
    return axios.create({
      ...config,
      timeout: 10000,
      ...(headers && { headers }),
      validateStatus: status => {
        // allow to go into `then`
        return (
          (status >= 200 && status < 300) || (status >= 400 && status <= 403)
        );
      },
    });
  },
};

async function requestPost(endpoint, payload = {}) {
  try {
    const http = axios.create({
      baseURL: `${API_HOST}:${API_PORT}`,
      validateStatus: status => {
        return status >= 200 && status < 500;
      },
    });
    const token = sessionStorage.getItem('token');
    const headers = token ? { token: token } : {};
    const { data } = await http
      .post(`${API_HOST}:${API_PORT}${endpoint}`, payload, headers)
      .then(res => {
        return res;
      })
      .catch(err => (location.href = getCurrentStorePath('/signin')));
  } catch (e) {
    throw e;
  }
}

async function requestGet(endpoint, queryParams = {}) {
  try {
    const token = sessionStorage.getItem('token');
    const headers = token ? { token: token } : {};
    const queryString = queryParams
      ? '?' +
        Object.keys(queryParams)
          .map(k => `${k}=${queryParams[k]}`)
          .reduce((a, b) => `${a}&${b}`)
      : '';
    const { data } = await this.apiClientConfig
      .http(
        {
          baseURL: `${API_HOST}:${API_PORT}`,
        },
        headers
      )
      .get(`${endpoint}${queryString}`)
      .then(res => {
        return res;
        //      if (res.status >= 200 && res.status < 500) {
        //        return res;
        //      } else {
        //        return res;
        //      }
      });
    return data;
  } catch (err) {
    throw err;
  }
}

export const api = {
  apiClientConfig,
  requestGet,
  requestPost,
};
