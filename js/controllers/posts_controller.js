app.controller('PostsCtrl', ['$scope', '$http', 'GetPosts', function($scope, $http, GetPosts){

  $scope.posts = GetPosts.query();

  // trash button doesn't listen to this
  function deletePost (e) {
    $('#posts-container').on('click', '.post-item', function () {
      console.log('click');
      console.log(this.data("id"));
    })
  }

}])
