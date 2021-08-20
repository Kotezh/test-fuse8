
class CardsApi {
  constructor(config) {
    this.url = config.baseUrl;
    this.headers = config.headers;
  }

  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  getCards() {
    return fetch(`${this.url}/homes`, {
      headers: this.headers,
    }).then(this._parseResponse);
  }
}

const config = {
  baseUrl: 'https://603e38c548171b0017b2ecf7.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
};

const cardsApi = new CardsApi(config);

export default cardsApi;
