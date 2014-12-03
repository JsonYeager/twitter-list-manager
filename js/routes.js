// Configs
twitterListManagerApp.config(function($routeProvider){
	
	$routeProvider
	
	.when('/',{
		controller: 'homeController',
		templateUrl: 'pages/home.htm'
	})	
	.when('/timeline',{
		controller: 'timeLineController',
		templateUrl: 'pages/timeline.htm'
	})	
	.when('/timeline/:action',{
		controller: 'timeLineController',
		templateUrl: 'pages/timeline.htm'
	});	
});