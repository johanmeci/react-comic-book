
const apiURL = `https://comicvine.gamespot.com/api/issues/?api_key=${import.meta.env.VITE_COMIC_KEY}&format=json&limit=10`;

const baseApiURL = 'https://comicvine.gamespot.com/api/';

export default function apiComics(options, printResult) {
  
  const cors_api_url = 'https://cors-anywhere.herokuapp.com/';

  var x = new XMLHttpRequest(options, printResult);
  x.open(options.method, cors_api_url + options.url);
  x.onload = x.onerror = function() {
    printResult(
      (x.responseText || '')
    );
  };
  if (/^POST/i.test(options.method)) {
    x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }
  x.send(options.data);

}