export class Fetcher {
  static get(url: string, options?: RequestInit | undefined) {
    return fetch(url, options).then((response) => response.json())
  }

  static post(url: string, body: unknown) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    })
  }
}
