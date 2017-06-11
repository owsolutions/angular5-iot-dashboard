declare var fetch: any;

export async function fetchApi (url: string) {
    const key = window.localStorage.getItem('_url_' + url);
    if (key) {
      return JSON.parse(key);
    }
    let response = await fetch(url);
    response = await response.json();
    window.localStorage.setItem('_url_' + url , JSON.stringify(response));
    return response;
}