import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		chooseStance: function(topic, stance) {
			// Ember.$(document).find('li#'+topic).hide();
			this.controllerFor('application').set('stances.'+topic, stance);
		}
	}
});
