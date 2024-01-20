const BASE_URL = "http://localhost:4040";

export default function getDb(key) {
  return fetch(`${BASE_URL}/${key}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

getDb("notebook");
