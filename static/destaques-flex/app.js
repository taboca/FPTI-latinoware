
var app =  {
	feedURL       : 'nothin',
	feed          : null,
	grid 	        : null,
	elementQueue  : null,
	msnry         : null,
	timer         : 5500,
	totalElements : 4,
	cycle         : 0,

	start : function() {
    	this.grid = $('.grid').masonry({
					itemSelector: '.grid-item',
					isFitWidth: true,
					columnWidth: 540
	    });
	    this.elementQueue=new Array();
			var self = this;

				   this.feed.load( function (e) {
			   		self.__feedUpdated(e)
			 } );
	},

	init : function () {
		// Notice this widget is now using the store,
		// so it's ignoring the this.feedURL
		this.feed = new t8l.feeds.Feed(this.feedURL);
		this.feed.setResultFormat(t8l.feeds.Feed.XML_FORMAT);
		this.feed.setNumEntries(10);
	} ,

	popRequest : function() {

		if (this.elementQueue.length == 0) {
			var self = this;
			//this.feed.load( function (e) { self.__feedUpdated(e) } );
		} else {
			var obj = this.elementQueue.pop();
			var item = $('<div class="grid-item  "><div class="twitPanel"><div class="header" ><img  valign="middle" src="'+obj.src+'" >  <h3> <i>(@'+obj.name+') </i>'+obj.screenname+'</h3></div><div class="desc">'+obj.title+'</div><div class="timeDate">'+obj.timedate+'</div></div></div>' );
			this.grid.append(item).masonry('appended',item);

			this.refContainerCycle++;

			var totalElements = $('.grid-item').length;

			if(totalElements>this.totalElements) {
				var toRemove = totalElements-this.totalElements;
				for(var i=0;i<toRemove;i++) {
					this.grid.masonry('remove',$('.grid-item')[i]).masonry('layout');
				}
			}
			return true;
		}
	},

	__feedUpdated : function(result) {
		var self  = this;
		if(result.error) { };
		var obj = JSON.parse(result.data);
		self.elementQueue.push(obj);
		self.popRequest();

	}
}
