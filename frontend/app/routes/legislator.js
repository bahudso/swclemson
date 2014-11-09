import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return Ember.$.getJSON(
			'https://congress.api.sunlightfoundation.com/legislators?apikey=17cb06a2b6c2427090eff7d1014f8de5&bioguide_id='+params.legislator_id
		).then(function(data) {
			return data.results[0];
		});
	}
});
