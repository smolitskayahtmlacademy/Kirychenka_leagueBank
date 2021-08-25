const BASE_URL = 'https://api.frankfurter.app';

export const api = (firstName, secondName, date, onSuccess, onError) => {
  fetch(`${BASE_URL}/${date}?from=${firstName}`)
    .then((response) => response.json())
    .then((json) => json.rates)
    .then((rates) => rates[secondName])
    .then((course) => {
      onSuccess(course);
      return course;
    })
    .catch(() => {
      onError();
    })
}
