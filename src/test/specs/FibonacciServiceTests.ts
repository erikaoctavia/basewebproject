///<reference path="../../../node_modules/@ryancavanaugh/angularjs/angular-mocks.d.ts" />
///<reference path="../../../node_modules/@ryancavanaugh/jasmine/jasmine.d.ts" />
'use strict';
System.import('test/dependencies').then(testFib, console.error.bind(console));

import {FibonacciService} from 'app/services/FibonacciService';

export function testFib() {
	describe ('ExampleApp.FibonacciService', function () {

		var fibonacciService : FibonacciService;

		beforeEach (angular.mock.module ('ExampleApp'));
		beforeEach (angular.mock.inject (function ($injector) {
			fibonacciService = $injector.get ('FibonacciService');
		}));

		it ('Should output correct Fibanacci numbers', function () {
			expect (fibonacciService.fibonacci (0)).toBe (0);
			expect (fibonacciService.fibonacci (1)).toBe (1);
			expect (fibonacciService.fibonacci (10)).toBe (55);
		});
	});
}

