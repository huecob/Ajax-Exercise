'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  fetch('/fortune')
  .then((response) => response.text()) //text instead of JSON *this is for dictionaries
  .then((responseData) => {
    document.querySelector('#fortune-text').innerHTML = responseData
  })
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  fetch(`/weather.json?zipcode=${zipcode}`)
  .then((response) => response.json())
  .then((serverData => {
    document.querySelector('#weather-info').innerHTML = serverData.forecast;
  }))

  // TODO: request weather with that URL and show the forecast in #weather-info
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();


  // the keys in your form inputs must match the variables in your .py file
   const formInputs = {
    qty: document.querySelector('#qty-field').value,
    melon_type: document.querySelector('#melon-type-field').value,
  };

    fetch('/order-melons.json', {
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      alert(responseJson.msg);
    });
};

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
document.querySelector('#order-form').addEventListener('submit', orderMelons);
