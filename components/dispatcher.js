var Dispatcher = function () {
	this._callbacks = [];
};

Dispatcher.prototype.dispatch = function(payload) {
	this._callbacks.forEach(function (callback) {
		callback(payload);
	});
};

Dispatcher.prototype.register = function (callback) {
	this._callbacks.push(callback);
};

module.exports = new Dispatcher();