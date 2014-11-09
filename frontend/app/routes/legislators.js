import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var legislators = [{
		  "name": "Lindsey Graham",
		  "chamber": "Senate",
		  "gun_laws": -1,
		  "abortion": 1,
		  "internet": -1,
		  "marijuana": 1,
		  "healthcare": -1,
		  "precentage": 0
		},
		{
		  "name": "Brad Hutto",
		  "chamber": "Senate",
		  "gun_laws": 0,
		  "abortion": 1,
		  "internet": -1,
		  "marijuana": 1,
		  "healthcare": 1,
		  "precentage": 0
		},
		{
		  "name": "Thomas Ravenel",
		  "chamber": "Senate",
		  "gun_laws": 0,
		  "abortion": 0,
		  "internet": 0,
		  "marijuana": 0,
		  "healthcare": 0,
		  "precentage": 0
		},
		{
		  "name": "Victor Kocher",
		  "chamber": "Senate",
		  "gun_laws": -1,
		  "abortion": 1,
		  "internet": 1,
		  "marijuana": -1,
		  "healthcare": 1,
		  "precentage": 0
		},
		{
		  "name": "Mark Sanford",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": 1,
		  "internet": -1,
		  "marijuana": 1,
		  "healthcare": 0,
		  "precentage": 0
		},
		{
		  "name": "Joe Wilson",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": -1,
		  "marijuana": -1,
		  "healthcare": -1,
		  "precentage": 0
		},
		{
		  "name": "Phil Black",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": 0,
		  "internet": 1,
		  "marijuana": -1,
		  "healthcare": -1,
		  "precentage": 0
		},
		{
		  "name": "Harold Geddings",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": 1,
		  "internet": -1,
		  "marijuana": -1,
		  "healthcare": 0,
		  "precentage": 0
		},
		{
		  "name": "Jeff Duncan",
		  "chamber": "House",
		  "gun_laws": 1,
		  "abortion": -1,
		  "internet": -1,
		  "marijuana": -1,
		  "healthcare": -1,
		  "precentage": 0
		},
		{
		  "name": "Barbara Jo Mullis",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": 1,
		  "marijuana": 0,
		  "healthcare": 1,
		  "precentage": 0
		},
		{
		  "name": "Trey Gowdy",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": 1,
		  "marijuana": 0,
		  "healthcare": -1,
		  "precentage": 0
		},
		{
		  "name": "Curtis McLaughlin",
		  "chamber": "House",
		  "gun_laws": 1,
		  "abortion": 1,
		  "internet": -1,
		  "marijuana": -1,
		  "healthcare": -1,
		  "precentage": 0
		},
		{
		  "name": "Mick Mulvaney",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": -1,
		  "marijuana": -1,
		  "healthcare": 0,
		  "precentage": 0
		},
		{
		  "name": "Tom Adams",
		  "chamber": "House",
		  "gun_laws": 1,
		  "abortion": 1,
		  "internet": 1,
		  "marijuana": 1,
		  "healthcare": 1,
		  "precentage": 0
		},
		{
		  "name": "Jim Clyburn",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": -1,
		  "marijuana": -1,
		  "healthcare": -1,
		  "precentage": 0
		},
		{
		  "name": "Anthony Culler",
		  "chamber": "House",
		  "gun_laws": 0,
		  "abortion": 0,
		  "internet": 0,
		  "marijuana": 1,
		  "healthcare": 0,
		  "precentage": 0
		},
		{
		  "name": "Kevin Umbaugh",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": -1,
		  "marijuana": 0,
		  "healthcare": 0,
		  "precentage": 0
		},
		{
		  "name": "Tom Rice",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": -1,
		  "marijuana": -1,
		  "healthcare": 1,
		  "precentage": 0
		},
		{
		  "name": "Gloria Bromell-Tinubu",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": -1,
		  "marijuana": 1,
		  "healthcare": 1,
		  "precentage": 0
		}];

		var stances = this.controllerFor('application').get('stances');
		legislators.forEach(function(leg) {
			var sum = 0;
			sum += Math.abs(leg.gun_laws - stances.guns);
			sum += Math.abs(leg.abortion - stances.abortion);
			sum += Math.abs(leg.internet - stances.internet);
			sum += Math.abs(leg.marijuana - stances.pot);
			sum += Math.abs(leg.healthcare - stances.healthcare);
			leg.percentage = (10 - sum) * 10;
		});

		return legislators;
	}
});