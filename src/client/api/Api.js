class Api {
  static get(path) {
    const request = new Request(path, {
      method: 'GET'
    });
    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }

  static post(path, bod) {
    const body = JSON.stringify(bod);
    const request = new Request(path, {
      body,
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }

  static put(path, bod) {
    const body = JSON.stringify(bod);
    const request = new Request(path, {
      body,
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }

  static delete(path) {
    const request = new Request(path, {
      method: 'DELETE'
    });
    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }
}

export default Api;
