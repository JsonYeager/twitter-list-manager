// Configs
twitterListManagerApp.config(function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        controller: 'homeController',
        templateUrl: 'pages/home.htm'
    }).when('/timeline', {
        controller: 'homeController',
        templateUrl: 'pages/timeline.htm'
    }).otherwise({redirectTo:'pages/otherwise.htm'});


    $locationProvider.html5Mode(true);
});