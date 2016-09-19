app.controller('PostsCtrl', ['$scope', '$http', function($scope, $http){

  function ctrlInit () {
    $scope.posts = [];
  }

  function setData (e) {
    for (i = 0; i < e.length; i++) {
      if (e[i].title) {
        e[i].story_title = angular.copy(e[i].title);
        e[i].story_url = angular.copy(e[i].url);
      } else if (e[i].story_title) {} else {
        e.splice(i, 1);
      }
    }
  }

  // trash button doesn't listen this or covered by html a tag event
  function deletePost (e) {
    console.log('click');
    console.log(this.data("id"));
  }

  $scope.api = {
    getposts: function () {
      console.log('get request run');
      $http.get("http://hn.algolia.com/api/v1/search_by_date?query=angular").then(function (res) {
          $scope.posts = angular.copy(res.data.hits);
          setData($scope.posts);
        })
    },
    init: function () {
      this.getposts();
    }
  };
  $scope.api.init();

}])
