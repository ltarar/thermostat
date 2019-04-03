'use strict'

function Thermostat() {
  this.temperature = 20
  this.MINIMUM_TEMP = 10
}

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature
}

Thermostat.prototype.up = function () {
  this.temperature += 1
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemp()) return
  else this.temperature -= 1
}

Thermostat.prototype.isMinimumTemp = function() {
  return this.temperature === this.MINIMUM_TEMP
}


