'use strict';

var assert = require('assert'),
	fs = require('fs');

describe('plugins:6to5', function () {

	it('compiles to es5', function (done) {
		var plugin = require('../')();
		fs.readFile('./test/fixtures/es6-good.js', function(err, data) {
			assert.ifError(err);
			plugin(data, {context:{}}, function(err, data) {
				assert.ifError(err);
				var code = '"use strict";\n\nvar y = function (x) {\n  return x * 2;\n};';
				assert.equal(data, code);
				done();
			});
		});
	});

	it('should warn on invalid syntax', function (done) {
		var plugin = require('../')();
		fs.readFile('./test/fixtures/es6-bad.js', function(err, data) {
			assert.ifError(err);
			plugin(data, {context:{}}, function(err, data) {
				assert.ok(err);
				done();
			});
		});
	});

	it('should support react stuff', function (done) {
		var plugin = require('../')();
		fs.readFile('./test/fixtures/es6-react.js', function(err, data) {
			assert.ifError(err);
			plugin(data, {context:{}}, function(err, data) {
				assert.ifError(err);
				assert.equal(data, '"use strict";\n\nmodule.exports = React.createElement("div", null);');
				done();
			});
		});
	});

	it('should support options (such as AMD and disabling use strict)', function (done) {
		var plugin = require('../')({
			options: {
				modules: 'amd',
				blacklist: ['useStrict']
			}
		});
		fs.readFile('./test/fixtures/es6-react.js', function(err, data) {
			assert.ifError(err);
			plugin(data, {context: {}}, function(err, data) {
				assert.ifError(err);
				var code = 'define(["exports", "module"], function (exports, module) {\n  module.exports = React.createElement("div", null);\n});';
				assert.equal(data, code);
				done();
			});
		});
	});

	it('should support the time option', function (done) {
		var plugin = require('../')({time: true});
		fs.readFile('./test/fixtures/es6-good.js', function(err, data) {
			assert.ifError(err);
			var started = false,
				happened = false,
				time = console.time,
				timeEnd = console.timeEnd;
			console.time = function() {
				started = true;
				console.time = time;
			};
			console.timeEnd = function() {
				happened = true;
				console.timeEnd = timeEnd;
			};
			plugin(data, {context: {}}, function(err, data) {
				assert.ifError(err);
				assert.ok(data);
				assert.ok(happened && started);
				done();
			});
		});
	});
});
