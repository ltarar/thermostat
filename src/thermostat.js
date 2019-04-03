'use strict'

function Thermostat() {
  this.temperature = 20
  this.MINIMUM_TEMP = 10
  this.powerSaveMode = true
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

Thermostat.prototype.isPowerSaveModeOn = function(){
  return this.powerSaveMode === true
}

Thermostat.prototype.isPowerSaveModeOff = function() {
  return this.powerSaveMode = false
}