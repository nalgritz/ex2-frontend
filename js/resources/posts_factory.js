app.factory('GetPosts', ['$resource', function($resource){
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