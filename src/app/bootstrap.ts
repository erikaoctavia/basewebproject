/// <reference path="../../node_modules/@ryancavanaugh/systemjs/systemjs.d.ts" />

/**
 * Created by zdaily on 3/28/2016.
 */
"use strict";
System.import('app').then(dependencies, console.error.bind(console));

function dependencies() {
	System.import('dependencies').then(bootstrap, console.error.bind(console));
}

function bootstrap() {
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['ExampleApp']);
	});
}
