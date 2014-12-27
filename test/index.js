'use strict';

var assert = require('assert'),
	fs = require('fs');

describe('plugins:6to5', function () {

	it('compiles to es5', function (done) {
		var plugin = require('../')();
		fs.readFile('./test/fixtures/es6-good.js', function(err, data) {
			assert.ifError(err);
			plugin(data, {}, function(err, data) {
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
			plugin(data, {}, function(err, data) {
				assert.ok(err);
				done();
			});
		});
	});

	it('should support react stuff', function (done) {
		var plugin = require('../')();
		fs.readFile('./test/fixtures/es6-react.js', function(err, data) {
			assert.ifError(err);
			plugin(data, {}, function(err, data) {
				assert.ifError(err);
				assert.equal(data, '"use strict";\n\nexports["default"] = React.createElement("div", null);');
				done();
			});
		});
	});

	it('should support options (such as AMD and disabling use strict)', function (done) {
		var plugin = require('../')();
		fs.readFile('./test/fixtures/es6-react.js', function(err, data) {
			assert.ifError(err);
			plugin(data, {
				options: {
					modules: 'amd',
					blacklist: ['useStrict']
				}
			}, function(err, data) {
				assert.ifError(err);
				var code = 'define(["exports"], function (exports) {\n  exports["default"] = React.createElement("div", null);\n});';
				assert.equal(data, code);
				done();
			});
		});
	});

});
