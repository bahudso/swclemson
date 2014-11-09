import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	
	this.route('application', {path: "/"}, function() {
		this.resource('bills', function() {
			this.route('bill', {path: ':bill_id'});
		});
		this.route('legislators');
		this.route('legislator', {path: 'legislator/:legislator_id'});
	});
});

export default Router;
