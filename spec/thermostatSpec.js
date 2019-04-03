'use strict';

describe('Thermostat', function() {

  var thermostat = new Thermostat();

  describe('starts itself with', function() {
    it('20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20)
    });
  });
});