'use strict'

function Thermostat() {
  this.DEFAULT_TEMP = 20
  this.temperature = this.DEFAULT_TEMP
  this.MINIMUM_TEMP = 10
  this.powerSaveMode = true
  this.MAX_TEMP_PSM_ON = 25
  this.MAX_TEMP_PSM_OFF = 32
}

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature
}

Thermostat.prototype.up = function () {
  if (this.isMaximumTemp()) return
  else this.temperature += 1
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

Thermostat.prototype.switchPowerSaveModeOff = function() {
  return this.powerSaveMode = false
}

Thermostat.prototype.switchPowerSaveModeOn = function() {
  return this.powerSaveMode = true
}

Thermostat.prototype.isMaximumTemp = function() {
  if (this.isPowerSaveModeOn() === true) {
    return this.temperature === this.MAX_TEMP_PSM_ON
  }
  else return this.temperature === this.MAX_TEMP_PSM_OFF
}

Thermostat.prototype.resetTemp = function() {
  return this.temperature = this.DEFAULT_TEMP
}