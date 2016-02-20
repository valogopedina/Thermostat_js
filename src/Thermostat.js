'use strict';

function Thermostat(){
	this.temperature = 20;
  this.MAX_TEMPERATURE = 25;
  this.displayColor = 'yellow';
};

Thermostat.prototype.getCurrentTemperature = function(){
	return this.temperature;
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.temperature === this.MAX_TEMPERATURE) {throw new Error ('Already at maximum temperature');
  };
  this.temperature += 1;
  this.checkColor();
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature === 10) {throw new Error ('Already at minimum temperature');
  };
  this.temperature -= 1;
  this.checkColor();
};

Thermostat.prototype.powerSavingOff = function(){
  this.MAX_TEMPERATURE = 32;
};

Thermostat.prototype.powerSavingOn = function(){
  this.MAX_TEMPERATURE = 25;
};

Thermostat.prototype.resetButton = function(){
  this.temperature = 20;
};


Thermostat.prototype.checkColor = function() {
  if ((this.temperature >= 18) && (this.temperature <= 25)) {
    this.displayColor = 'yellow';
  } else if (this.temperature <= 18) {
    this.displayColor = 'green'
  } else {this.displayColor = 'red'
  };
};

