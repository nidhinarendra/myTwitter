angular.module('myTwitter', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  //$urlRouterProvider.otherwise('homexyz');
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


//.factory('tweetContent', [function(){
//  var toPersist = {
//    tweetContent: []
//  };
//  return toPersist;
//}])


.controller('Maincntrl', [
  '$scope',
  function($scope, tweetContent){


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
//  'tweetContent',
  function($scope, tweetContent){
    $scope.date = new Date();

//    $scope.tweetContent = tweetContent.tweetContent;

    $scope.myTweets = [
      {tweetId: 1,
        myTweet: 'welcome'
      },
      {tweetId: 2,
        myTweet: 'Hello'
      },
      {tweetId: 3,
        myTweet: 'Bye'
      }
    ]

/*    $scope.addTweet = function(){
      if($scope.tweet === ''){
        return;
      }
      $scope.tweetContent.push({
        tweetId: 5,
        myTweet: $scope.tweet
      });
      $scope.tweet='';
    }*/
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
