'use strict'

describe('Thermostat', function() {

  var thermostat = new Thermostat()

  describe('starts at 20 degrees', function() {
    it('20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20)
    })

    it('increases temperature with up()', function() {
      thermostat.up()
      expect(thermostat.getCurrentTemperature()).toEqual(21) 
    })
  })

})