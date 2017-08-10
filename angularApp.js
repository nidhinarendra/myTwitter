angular.module('myTwitter', ['ui.router'])
.config(function($stateProvider){
  var myTweetsState = {
    name: 'myTweets',
    url: '/myTweets',
    templateUrl: '/myTweets.html'
  }

  var homeState = {
    name: 'home',
    url: '/home',
    templateUrl: '/homePage.html'
  }
  $stateProvider.state(myTweetsState);
})
/*
$stateProvider
.state('home', {
url: '/home',
templateUrl: 'home.html',
controller: 'Maincntrl'
})

.state('tweets', {
url: '/myTweets',
templateUrl: 'myTweets.html',
controller: 'myTweetscntrl'
})

.state('following', {
url: '/following',
templateUrl: 'following.html',
controller: 'followingcntrl'
})

.state('followers', {
url: '/followers',
templateUrl: 'followers.html',
controller: 'followerscntrl'
})
})

*/


.factory('myTweets', [function(){
  var toPersist = {
    myTweets: []
  };
  return toPersist;
}])


.controller('Maincntrl', [
  '$scope',
  function($scope){


    $scope.homePageContents =
    {user: "Nidhi",
    tweets: 10,
    following: 15,
    followers: 20
  };
}
])

.controller ('myTweetscntrl', [
  '$scope',
  'myTweets',
  function($scope, myTweets){
    $scope.date = new Date();

    //    $scope.tweetContent = tweetContent.tweetContent;

    $scope.myTweets = myTweets.myTweets;

    $scope.addTweet = function(){

      if($scope.tweet === ''){
        return;
      }

      $scope.myTweets.push({tweetId: 4, myTweet: $scope.tweet})
      //      $scope.tweetContent.push({
      //        tweetId: 5,
      //        myTweet: $scope.tweet
      //      });
      $scope.tweet='';
    }
  }
])
.controller('followingcntrl',[
  '$scope',
  function($scope){
    $scope.following = [
      {fren: 1,
        frenName: 'Priya'
      },
      {fren: 2,
        frenName: 'Darsh'
      }
    ];
  }])

  .controller('followerscntrl',[
    '$scope',
    function($scope){
      $scope.followers = [
        {fren: 1,
          frenName: 'Alex'
        },
        {fren: 2,
          frenName: 'Brandy'
        },
        {fren: 3,
          frenName: 'Stew'
        }
      ];
    }]);
