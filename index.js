'use strict';

var fs = require('graceful-fs');
var Promise = require('pinkie-promise');
var pify = require('pify');

module.exports = function (filepath) {
	return pify(fs.readFile, Promise)(filepath, 'utf8').then(function (data) {
		return data;
	});
};
