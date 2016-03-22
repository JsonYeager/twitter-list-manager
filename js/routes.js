// Configs
twitterListManagerApp.config(function($routeProvider) {

    $routeProvider.when('/', {
        controller: 'homeController',
        templateUrl: 'pages/home.htm'
    }).when('/timeline', {
        controller: 'homeController',
        templateUrl: 'pages/timeline.htm'
    }).when('/timeline/:action', {
        controller: 'homeController',
        templateUrl: 'pages/timeline.htm'
    });
});