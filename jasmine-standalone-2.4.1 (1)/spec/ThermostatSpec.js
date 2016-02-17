'use strict';

describe('Thermostat', function(){
	
	it('Thermostat is defined', function(){
		var thermostat = new Thermostat();
		expect(thermostat).toBeDefined();
	});

	it('calls a method that starts at 20 degrees', function(){
		var thermostat = new Thermostat();
		thermostat.temperature();
		expect(thermostat.temperature).toEqual(20);
	});
});

	// it('Temperature method is set up', function(){
	// 	var thermostat = new Thermostat();
	// 	thermostat.temperature();
	// 	expect(thermostat.temperature).toBeDefined();
	// });