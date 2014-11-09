import Ember from 'ember';

export default Ember.Controller.extend({
	settings: {
		set: false,
		subscriptions: [],
		state: "SC"
	},
	stances: {
		guns: 1,
		abortion: 0,
		internet: 0,
		pot: 0,
		healthcare: 0
	}
});
