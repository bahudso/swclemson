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
		  "precentage": 0,
			"id": "G000359",
			"img": "http://www.maggiesnotebook.com/wp-content/uploads/2013/03/Lindsey_Graham_1.jpg"
		},
		{
		  "name": "Brad Hutto",
		  "chamber": "Senate",
		  "gun_laws": 0,
		  "abortion": 1,
		  "internet": -1,
		  "marijuana": 1,
		  "healthcare": 1,
		  "precentage": 0,
		  "id": "NA",
                  "img": "http://cdn.southcarolinaradionetwork.com/wp-content/uploads/2014/03/Hutto.jpg"
		},
		{
		  "name": "Thomas Ravenel",
		  "chamber": "Senate",
		  "gun_laws": 0,
		  "abortion": 0,
		  "internet": 0,
		  "marijuana": 0,
		  "healthcare": 0,
		  "precentage": 0,
                  "id": "NA",
                  "img": "http://fitsnews.com/wp-content/uploads/2014/02/ravenel1.jpg"
		},
		{
		  "name": "Victor Kocher",
		  "chamber": "Senate",
		  "gun_laws": -1,
		  "abortion": 1,
		  "internet": 1,
		  "marijuana": -1,
		  "healthcare": 1,
		  "precentage": 0,
                  "id": "NA",
                  "img": "http://www.postandcourier.com/storyimage/CP/20140729/PC1603/140729295/AR/0/AR-140729295.jpg&maxw=400&q=90"
		},
		{
		  "name": "Tim Scott",
		  "chamber": "Senate",
		  "gun_laws": -1,
		  "abortion": 0,
		  "internet": 1,
		  "marijuana": 0,
		  "healthcare": 1,
		  "precentage": 0,
                  "id": "S001184",
                  "img": "http://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tim_Scott%2C_official_portrait%2C_113th_Congress.jpg/640px-Tim_Scott%2C_official_portrait%2C_113th_Congress.jpg"
		},
		{
		  "name": "Joyce Dickerson",
		  "chamber": "Senate",
		  "gun_laws": -1,
		  "abortion": 1,
		  "internet": -1,
		  "marijuana": -1,
		  "healthcare": 1,
		  "precentage": -1,
                  "id": "NA",
                  "img": "http://www.gannett-cdn.com/-mm-/7d3ed75b5304d03dc4460c5c20e64c7ea8aa1ccb/c=141-0-1864-2297&r=537&c=0-0-534-712/local/-/media/Greenville/2014/06/10/joycedickerson.jpg"
		},
		{
		  "name": "Jill Bossi",
		  "chamber": "Senate",
		  "gun_laws": 1,
		  "abortion": -1,
		  "internet": 1,
		  "marijuana": 1,
		  "healthcare": -1,
		  "precentage": 0,
                  "id": "NA",
                  "img": "https://scontent-a-lga.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/1964855_819581208056920_1671222356_n.jpg?oh=802c23575007ad553e6c175c0850ff85&oe=54EBB5A6"
		},
		{
		  "name": "Mark Sanford",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": 1,
		  "internet": -1,
		  "marijuana": 1,
		  "healthcare": 0,
		  "precentage": 0,
                  "id": "S000051",
                  "img": "http://i.usatoday.net/communitymanager/_photos/on-politics/2012/08/25/mark-sanford%20x-large.jpg"
		},
		{
		  "name": "Joe Wilson",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": -1,
		  "marijuana": -1,
		  "healthcare": -1,
		  "precentage": 0,
                  "id": "W000795",
                  "img": "http://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Joewilson.jpeg/640px-Joewilson.jpeg"
		},
		{
		  "name": "Phil Black",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": 0,
		  "internet": 1,
		  "marijuana": -1,
		  "healthcare": -1,
		  "precentage": 0,
		  "id": "NA",
                  "img": "http://votesmart.org/canphoto/105075.jpg"
		},
		{
		  "name": "Harold Geddings",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": 1,
		  "internet": -1,
		  "marijuana": -1,
		  "healthcare": 0,
		  "precentage": 0,
		  "id": "NA",
                  "img": "http://ballotpedia.org/wiki/images/d/d1/HaroldGeddingsIII.jpg"
		},
		{
		  "name": "Jeff Duncan",
		  "chamber": "House",
		  "gun_laws": 1,
		  "abortion": -1,
		  "internet": -1,
		  "marijuana": -1,
		  "healthcare": -1,
		  "precentage": 0,
                  "id": "D000615",
                  "img": "http://upload.wikimedia.org/wikipedia/commons/e/ee/Rep_Jeff_Duncan.jpg"
		},
		{
		  "name": "Barbara Jo Mullis",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": 1,
		  "marijuana": 0,
		  "healthcare": 1,
		  "precentage": 0,
		  "id": "NA",
                  "img": "https://scontent-a-lga.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/1897804_592850240796926_795564411_n.jpg?oh=c8dbd7ef8bfd132b5cf3708003041227&oe=54EFDD9F"
		},
		{
		  "name": "Trey Gowdy",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": 1,
		  "marijuana": 0,
		  "healthcare": -1,
		  "precentage": 0,
                  "id": "G000566",
                  "img": "http://gowdy.house.gov/images/portrait.png"
		},
		{
		  "name": "Curtis McLaughlin",
		  "chamber": "House",
		  "gun_laws": 1,
		  "abortion": 1,
		  "internet": -1,
		  "marijuana": -1,
		  "healthcare": -1,
		  "precentage": 0,
		  "id": "NA",
                  "img": "https://scontent-a-lga.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/10687098_612113842227164_2878641962419240371_n.jpg?oh=2187765b13c5d2f86a09317d0b3774fd&oe=54D69944"
		},
		{
		  "name": "Mick Mulvaney",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": -1,
		  "marijuana": -1,
		  "healthcare": 0,
		  "precentage": 0,
                  "id": "M001182",
                  "img": "https://www.congress.gov/img/member/112_rp_sc_5_mulvaney_mick.jpg"
		},
		{
		  "name": "Tom Adams",
		  "chamber": "House",
		  "gun_laws": 1,
		  "abortion": 1,
		  "internet": 1,
		  "marijuana": 1,
		  "healthcare": 1,
		  "precentage": 0,
		  "id": "NA",
                  "img": "http://www.charlestoncitypaper.com/imager/tom-adams-democratic-candidate-for-sc-c/b/original/4975787/f68b/AdamsHead.jpg"
		},
		{
		  "name": "Jim Clyburn",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": -1,
		  "marijuana": -1,
		  "healthcare": -1,
		  "precentage": 0,
                  "id": "C000537",
                  "img": "http://media.washingtonpost.com/wp-srv/politics/congress/members/photos/228/C000537.jpg"
		},
		{
		  "name": "Anthony Culler",
		  "chamber": "House",
		  "gun_laws": 0,
		  "abortion": 0,
		  "internet": 0,
		  "marijuana": 1,
		  "healthcare": 0,
		  "precentage": 0,
		  "id": "NA",
                  "img": "http://teapartycheer.com/wp-content/uploads/2014/05/06.02-Anthony-Culler.jpg"
		},
		{
		  "name": "Kevin Umbaugh",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": -1,
		  "marijuana": 0,
		  "healthcare": 0,
		  "precentage": 0,
		  "id": "NA",
                  "img": "http://ballotpedia.org/wiki/images/thumb/d/df/Kevin_Umbaugh.jpg/480px-Kevin_Umbaugh.jpg"
		},
		{
		  "name": "Tom Rice",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": -1,
		  "marijuana": -1,
		  "healthcare": 1,
		  "precentage": 0,
                  "id": "R000597",
                  "img": "http://upload.wikimedia.org/wikipedia/commons/2/2c/Tom_Rice_113th_Congress.jpg"
		},
		{
		  "name": "Gloria Bromell-Tinubu",
		  "chamber": "House",
		  "gun_laws": -1,
		  "abortion": -1,
		  "internet": -1,
		  "marijuana": 1,
		  "healthcare": 1,
		  "precentage": 0,
		  "id": "NA",
                  "img": "http://bloximages.newyork1.vip.townnews.com/scnow.com/content/tncms/assets/v3/editorial/4/35/4350bba2-52bc-51ff-949a-d8d0ce1d77f3/50d4c616f3612.image.jpg"
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

		return legislators.sort(function(a, b) {
        var x = a.percentage; var y = b.percentage;
        return y - x;
    });
	}
});
