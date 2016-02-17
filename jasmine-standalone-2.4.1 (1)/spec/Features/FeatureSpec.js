'use strict';

//User stories + feature tests
//############################

//1. Thermostat starts at 20 degrees

describe('Thermostat', function() {
    var thermostat;

    beforeEach(function() {
      thermostat = new Thermostat();
    });

  it('starts at 20 degrees', function() {
    expect(thermostat.startTemperature).toEqual(20);
  });
});


