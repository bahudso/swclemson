import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.$.getJSON('https://congress.api.sunlightfoundation.com/bills?apikey=17cb06a2b6c2427090eff7d1014f8de5');
	}
});
