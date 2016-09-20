app.factory('setData', function() {
  return function copyTitleUrl(e){
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
})