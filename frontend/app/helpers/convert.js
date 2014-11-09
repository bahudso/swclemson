import Ember from 'ember';

export function convert(input) {
	if (input == 0) {
		return "Indifferent";
	} else if (input == -1) {
		return "No";
	} else {
		return "Yes";
	}
};

export default Ember.Handlebars.makeBoundHelper(convert);
