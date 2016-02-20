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
    expect(thermostat.temperature).toEqual(20);
  });

//2. Increases the temperature with the up button

  it('increases in temperature with the up button', function(){
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

//3. Decreases the temperature with the down button

  it('decreases in temperature with the down button', function(){
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });


//4. Sets the minimum temp at 10 degrees

  it('sets the minimum temperature at 10 degrees ', function(){
    for(var i = 1; i <= 10; i++) {
    thermostat.decreaseTemperature();
    }
    expect(function(){ thermostat.decreaseTemperature()}).toThrowError('Already at minimum temperature')
  });

//5. If power saving mode is on, the maximum temperature is 25 degrees

  it('sets the maximum temperature at 25 degrees ', function(){
    for(var i = 1; i <= 5; i++) {
    thermostat.increaseTemperature();
    }
    expect(function(){ thermostat.increaseTemperature()}).toThrowError('Already at maximum temperature')
  });


//6. If power saving mode is off, the maximum temperature is 32 degrees
it('sets the maximum temperature at 32 degrees ', function(){
    thermostat.powerSavingOff();
    for(var i = 1; i <= 12; i++) {
    thermostat.increaseTemperature();
    }
    expect(function(){ thermostat.increaseTemperature()}).toThrowError('Already at maximum temperature')
  });

it('powers saving mode on ', function(){
    thermostat.powerSavingOff();
    for(var i = 1; i <= 12; i++) {
    thermostat.increaseTemperature();
    }
    for(var i = 1; i <= 7; i++) {
    thermostat.decreaseTemperature();
    }
    thermostat.powerSavingOn();
    expect(function(){ thermostat.increaseTemperature()}).toThrowError('Already at maximum temperature')
  });

//7. Power saving mode is on by default(Max_TEMPERATURE already by default)

//8. You can reset the temperature to 20 by hitting the reset button

  it('resets the temperature to 20 by reset button ', function(){
    for(var i = 1; i <= 10; i++) {
    thermostat.decreaseTemperature();
    }
    thermostat.resetButton();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });


//9. The thermostat should colour the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red

it('colours the display yellow when energy is more than 18 and less than 25', function (){
    expect(thermostat.displayColor).toEqual('yellow');
  });

  it('colours the display green when energy is less than 18', function (){
    for(var i = 1; i <= 3; i++) {
    thermostat.decreaseTemperature();
    }
  expect(thermostat.displayColor).toEqual('green');
  });

 it('colours the display red when energy is more than 25', function (){
    thermostat.powerSavingOff();
    for(var i = 1; i <= 6; i++) {
    thermostat.increaseTemperature();
    }
  expect(thermostat.displayColor).toEqual('red');
  });








});