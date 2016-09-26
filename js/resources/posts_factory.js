app.factory('GetPosts', ['$resource', function($resource){
  function setData(e){
    for (i = 0; i < e.length; i++) {
      if (e[i].title) {
        e[i].story_title = angular.copy(e[i].title);
      } else if (e[i].story_title) {} else {
        e.splice(i, 1);
      };
      if (e[i].url) {
        e[i].story_url = angular.copy(e[i].url);
      };
    }
    return e;
  };

  return $resource("http://hn.algolia.com/api/v1/search_by_date?query=angular", {}, {
    query: {
      method: 'GET',
      params: {},
      isArray: true,
      transformResponse: function (data, header) {
        var jsonData = JSON.parse(data);
        var posts = jsonData.hits;
        setData(posts);
        return posts;
      }
    }
  });
}]);