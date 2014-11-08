import Ember from 'ember';

export default Ember.Controller.extend({
	settings: {
		set: true,
		subscriptions: ["a", "b"],
		state: "SC"
	}
});
