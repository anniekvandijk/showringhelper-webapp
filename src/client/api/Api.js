class Api {
  static get(path) {
    const request = new Request(path, {
      method: 'GET'
    });
    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }
}

export default Api;
