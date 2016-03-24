// Controllers
twitterListManagerApp.controller('homeController', ['$scope', '$location', 'twitterService', function($scope, $location, twitterService) {

    $scope.tweets; //array of tweets

    twitterService.initialize();

    //using the OAuth authorization result get the latest 20 tweets from twitter for the user
    $scope.refreshTimeline = function() {
        twitterService.getLatestTweets().then(function(data) {
            $scope.tweets = data;
        });
    }

    //when the user clicks the connect twitter button, the popup authorization window opens
    $scope.connectButton = function() {
        twitterService.connectTwitter().then(function() {
            if (twitterService.isReady()) {
                //if the authorization is successful, hide the connect button and display the tweets
                $scope.refreshTimeline();
                $location.path('timeline');
            }
        });
    }

    //sign out clears the OAuth cache, the user will have to reauthenticate when returning
    $scope.signOut = function() {
        twitterService.clearCache();
        $scope.tweets.length = 0;
        $location.path('/');
    }

    //if the user is a returning user, hide the sign in button and display the tweets
    if (twitterService.isReady()) {
        $scope.refreshTimeline();
        $location.path('timeline');
    }
}]);