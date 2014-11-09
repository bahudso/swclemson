import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		Ember.$('li.list-group-item button').on('click', function() {
			var og = $(this);
			Ember.$(this).parent('li').find('button').each(function() {
				if ($(this) != $(og)) {
					$(this).attr('class', 'btn btn-default')
				}
			});
			Ember.$(this).parent('li').css('box-shadow', '5px 5px 5px 5px rgba(0,0,0,0)');
			Ember.$(this).parent('li').css('-webkit-box-shadow', '5px 5px 5px 5px rgba(0,0,0,0)');
		});
	}
});
