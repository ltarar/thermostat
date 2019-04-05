let thermostat = new Thermostat();

$(document).ready(function() {
  
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSaveModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSaveModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage());
  }  

});