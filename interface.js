$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  displayWeather();



  $('#increaseTemperature').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#decreaseTemperature').click(function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#powerSavingOn').click(function() {
    thermostat.powerSavingOn();
    updateTemperature();
  });

  $('#powerSavingOff').click(function() {
    thermostat.powerSavingOff();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.resetButton();
    updateTemperature();
  });

  $('#currentCity').change(function() {
    var city = $('#currentCity').val();
    displayWeather(city);
  })



  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.checkColor());
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=9a552aaf8b817e49e1ddedf078273896';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#currentTemperature').text(data.main.temp);
    });
  }
});

