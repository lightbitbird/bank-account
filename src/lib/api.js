import axios from 'axios';

const apiClientConfig = {
  _validateStatus(status) {
    // HTTP ステータスコード 200番台と401を thenに入るように許可する
    return (status >= 200 && status < 300) || status === 401;
  },
  http(config, headers) {
    // return axios({
    return axios.create({
      ...config,
      timeout: 10000,
      ...(headers && { headers }),
      validateStatus: status => {
        // HTTP ステータスコード 200番台と401を thenに入るように許可する
        return (status >= 200 && status < 300) || status === 401;
      },
    });
  },
};

async function requestPut(payload) {
  try {
    const { data } = await this.apiClientConfig({
      method: 'PUT',
      url: '/account',
      data: { ...payload },
    });
    return data;
  } catch (e) {
    throw e;
  }
}

async function requestGet() {
  try {
    const { data } = await this.apiClientConfig({
      method: 'GET',
      url: '/account',
    })
    return data;
  } catch (err) {
    throw err;
  }
}

// exort default requestGet;
