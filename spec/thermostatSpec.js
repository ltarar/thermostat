'use strict'

describe('Thermostat', function() {
  // var thermostat = new Thermostat()
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('starts at 20 degrees', function() {
    it('20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20)
    })

    it('increases in temperature with up()', function() {
      thermostat.up()
      expect(thermostat.getCurrentTemperature()).toEqual(21) 
    })

    it('decreases in temperature with down()', function() {
      thermostat.down()
      expect(thermostat.getCurrentTemperature()).toEqual(19)
    })

    it('has a minimum of 10 degrees', function() {
      for (var i = 0; i < 10; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    })

    it('has Power Saving Mode on by default', function() {
      expect(thermostat.isPowerSaveModeOn()).toBe(true)
    })
  })

})