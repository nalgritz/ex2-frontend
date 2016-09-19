var app = /**
* hackerNewsApp Module
*
* Description
*/
angular.module('hackerNewsApp', ['ui.bootstrap', 'ngResource', 'angularMoment']);

function setData (e) {
  for (i = 0; i < e.length; i++) {
    if (e[i].title) {
      e[i].story_title = angular.copy(e[i].title);
      e[i].story_url = angular.copy(e[i].url);
    } else if (e[i].story_title) {} else {
      e.splice(i, 1);
    }
  }
};