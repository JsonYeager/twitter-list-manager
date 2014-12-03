// Directives

twitterListManagerApp.directive("twitterTimelineView", function(){	
	return{
		restrict: 'E',
		templateUrl: 'directives/timelineView.htm',
		replace: true,
		scope: {
			tweetItem: "="
			/*,
			convertToStandard: "&",
			convertToDate: "&",
			dayDateFormat: "@",
			dateFormat: "@",
			itemIndex: "@"*/
		}		
	};
});
