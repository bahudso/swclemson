import Ember from 'ember';

export default Ember.Route.extend({
	subscriptions: ["a", "b"],
	state: "SC"
});
