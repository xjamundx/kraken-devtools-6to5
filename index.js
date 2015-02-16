'use strict';

var babel = require('babel');

module.exports = function (options) {

	options = options || {};
	options.ext = options.ext || 'js';

	return function (data, args, callback) {

		var opts = options.options,
			error = null,
			name = args.context.filePath,
			transformed;

		// time this thing
		if (options.time) {
			console.time(name);
		}

		try {
			transformed = babel.transform(data.toString('utf8'), opts);
		} catch(e) {
			error = e;
		}

		// complete the timing
		if (options.time) {
			console.timeEnd(name);
		}

		callback(error, transformed && transformed.code);

	};
};