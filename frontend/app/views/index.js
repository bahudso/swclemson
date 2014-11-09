import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		Ember.$('li.list-group-item img').on('click', function() {
			Ember.$(this).parent('div').parent('li').find('img').attr('src', 'checkbox-unchecked.png');
			Ember.$(this).attr('src', 'checkbox-checked.png');
		});
	}
});
