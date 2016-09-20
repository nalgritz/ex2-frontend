app.controller('PostsCtrl', ['$scope', '$http', 'GetPosts', function($scope, $http, GetPosts){

  $scope.posts = GetPosts.query();

  $scope.deletePost = function ($index) {
    $scope.posts.splice($index, 1);
  }

}])