app.controller('PostsCtrl', ['$scope', '$http', 'GetPosts', function($scope, $http, GetPosts){

  $scope.posts = GetPosts.query().sort(function (a, b) {return a.created_at > b.created_at});

  // $scope.clickPost = function ($index) {
  //   $('#posts-container').on('click', '.post-item', function () {

  //   })
  // }

  $scope.deletePost = function ($index) {
    $scope.posts.splice($index, 1);
  }
}])
