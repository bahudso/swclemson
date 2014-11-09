import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		Ember.$(document).find('div.percentage').each(function() {
			console.log($(this).text());
			if ($(this).text() == "90%" || $(this).text() == "80%") {
				$(this).parent('li').css('border-color', 'green');
				$(this).css('color', 'green');
			}
			if ($(this).text() == "70%" || $(this).text() == "60%") {
				$(this).parent('li').css('border-color', 'orange');
				$(this).css('color', 'orange');
			}
			if ($(this).text() == "30%" || $(this).text() == "20%" || $(this).text() == "10%" || $(this).text() == "50%" || $(this).text() == "40%") {
				$(this).parent('li').css('border-color', 'red');
				$(this).css('color', 'red');
			}
		});

		this._super();
    	window.scrollTo(0,0);
	}
});
