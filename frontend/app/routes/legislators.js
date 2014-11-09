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
                  "id": "G000359"
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
                  "img": "http://blogs.villagevoice.com/runninscared/grimmbanner.jpg"
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
                  "img": "http://img3.rnkr-static.com/list_img/11897/311897/full/current-jewish-congressmen-u1.jpg"
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
                  "img": "http://www.wzdm.com/wp-content/uploads/2014/09/9bc3Vincennes-Knox-State-bucshon.jpg"
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
                  "img": "https://pbs.twimg.com/profile_images/459065424491999233/95J7eb-P.jpeg"
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
                  "img": "http://3.bp.blogspot.com/-y36ACIiOBqc/T8OeJH34roI/AAAAAAAACYs/xhacsbj7NtI/s1600/ConnieMorella-e1337896620433.png"
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
                  "img": "http://thenypost.files.wordpress.com/2013/08/mark_sanford-300x3001.jpg?w=300&h=300&crop=1"
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
                  "img": "http://4.bp.blogspot.com/-NRe7MVl9ISI/UNPGT2u11xI/AAAAAAAAAWA/9H5woBAYlRU/s1600/kyrsten-sinema_0.jpg"
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
                  "img": "http://gosar.house.gov/sites/gosar.house.gov/files/styles/section_front_boilerplate/public/Congressman_Paul_Gosar.jpg?itok=epwdH-NG"
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
                  "img": "https://pbs.twimg.com/profile_images/523143522623311872/PAGe_fYV.jpeg"
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
