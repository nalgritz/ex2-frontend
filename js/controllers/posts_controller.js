app.controller('PostsCtrl', ['$scope', 'GetPosts', function($scope, GetPosts){

  $scope.posts = GetPosts.query();
// this is not a promise, doesn't work
// .then(function () {
//     console.log('hi');
//   });

  $scope.deletePost = function ($index) {
    $scope.posts.splice($index, 1);
  }

}])