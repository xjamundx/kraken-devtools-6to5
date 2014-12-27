'use strict';

var to5 = require('6to5');

module.exports = function (options) {

	options = options || {};
	options.ext = options.ext || 'js';

	return function (data, args, callback) {

		var opts = args.options,
			error = null,
			name = args.context.filePath,
			transformed;

		// time this thing
		if (options.time) {
			console.time(name);
		}

		try {
			transformed = to5.transform(data.toString('utf8'), opts);
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