var app =  {

	feedURL     : URL_TWIT,
	MAX_ITEMS   : 4,
	loopTimer   : 5500,
	shortTimer  : 2000,
	feed        : null,
	total       : 0,

	start : function() {
		var self = this;
		this.tweetQueue = new Array();
		setTimeout( function(){self.updateFeed()},500);
	},

	init : function () {
		this.feed = new t8l.feeds.Feed(this.feedURL);
		this.feed.setResultFormat('text'); // differs from google now
		this.feed.setNumEntries(10);
	} ,

	render : function() {
		var counter = 0;
		var self = this;
		if(this.tweetQueue.length<1) {
			setTimeout( function(){self.updateFeed()},this.loopTimer);
		} else {

			obj = this.tweetQueue.pop();
			try {
				t8l.message('/main/twitterChannel', JSON.stringify(obj));
			} catch(i) {}
			this.total++;

			if(this.total>this.MAX_ITEMS) {
				this.total--;
			}
			setTimeout( function () { self.render() }, this.shortTimer);

		}
	},

	updateFeed : function() {
		var self =this;
		this.feed.load( function (e) { self.__feedUpdated(e) } );
	},

	__feedUpdated : function(result) {
        this.tweetRepeated = {};
				var self  = this;

        if(result.error) { };

        var text = result.xmlDocument;
        var objs = $.parseJSON(text);
        for( var k in objs) {
              out = {};
              out.title = objs[k].text;
              out.screenname=objs[k].user.screen_name;
              out.name=objs[k].user.name;
              out.timedate=objs[k].created_at;
              out.subtitle='';
              out.body='';
              out.src=objs[k].user.profile_image_url;
              self.tweetQueue.push( out );
        }

		var self = this;
		self.render();

	}
}
