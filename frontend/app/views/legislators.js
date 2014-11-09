import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		Ember.$(document).find('div.percentage').each(function() {
			if (Ember.$(this).text() === "100%" || Ember.$(this).text() === "90%" || Ember.$(this).text() === "80%") {
				Ember.$(this).parent('li').css('border-color', 'green');
				Ember.$(this).css('color', 'green');
				Ember.$(this).parent('li').css('background-color', 'rgba(0,155,0,.5)');
			}
			if (Ember.$(this).text() === "70%" || Ember.$(this).text() === "60%") {
				Ember.$(this).parent('li').css('border-color', 'orange');
				Ember.$(this).css('color', 'orange');
				Ember.$(this).parent('li').css('background-color', 'rgba(255,165,0,.5)');
			}
			if (Ember.$(this).text() === "30%" || Ember.$(this).text() === "20%" || Ember.$(this).text() === "10%" || Ember.$(this).text() === "50%" || Ember.$(this).text() === "40%") {
				Ember.$(this).parent('li').css('border-color', 'red');
				Ember.$(this).css('color', 'red');
				Ember.$(this).parent('li').css('background-color', 'rgba(255,0,0,.5)');
			}
		});

		Ember.$('a.view-matches').on("click", function() {
			Ember.$(this).hide();
			Ember.$(this).parent().parent('li').find('table').show();
		});

		this._super();
    	window.scrollTo(0,0);
	}
});
