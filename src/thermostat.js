'use strict'

function Thermostat() {
  this.temperature = 20
  this.MINIMUM = 10
}

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature
}

Thermostat.prototype.up = function () {
  this.temperature += 1
}

Thermostat.prototype.down = function() {
  this.temperature -= 1
}

Thermostat.prototype.minimumTemperature = function() {
  for(this.temperature = 0 ; this.temperature < 10 ; this.temperature++) {
    this.temperature === this.MINIMUM
  }

}