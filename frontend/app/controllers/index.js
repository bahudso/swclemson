import Ember from 'ember';

export default Ember.Controller.extend({
	settings: {
		set: false,
		subscriptions: [],
		state: ""
	},
	actions: {
		chooseTopic: function(topic) {
			alert(topic);
		}
	}
});
