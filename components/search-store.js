var dispatcher = require('./dispatcher');

var SearchStore = function () {
	this.term = '';
	this._listeners = [];
}

//these would probably be pulled out once more stores come along
SearchStore.prototype.emitChange = function() {
	this._listeners.forEach(function (listener) {
		listener();
	});
};

SearchStore.prototype.addListener = function(listener) {
	this._listeners.push(listener);
};

var searchStore = new SearchStore();

dispatcher.register(function (payload) {
	if (payload.actionType === 'search') {
		searchStore.term = payload.term;
		searchStore.emitChange();
	}
});

module.exports = searchStore;