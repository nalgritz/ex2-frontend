# exercise 2 (frontend app)

You should create an Angular app to fetch news posts about Angular from HackerNews using the above URL.
When a user loads the app, the app should use the above URL to fetch an Array of news posts and show the most recent posts in date order.
Users should be able to click the delete button to remove an individual post from this view.
You must use at least 1 Controller, Factory and Service within your Angular app.
Other that those rules, you are free to use any suitable packages, libraries or functions you wish.
Please refer to the wireframe attached for the specific style rules for the view.


Pseudo-code
===========
-- Done --
  - 1. Initialize Angular App
- Basic Features:
  - a. Fetch news from API URL: http://hn.algolia.com/api/v1/search_by_date?query=angular
  - b.1 List posts in rows

-- Pending --
  - b.2 if "story_title" is null, then use "title". else neglect the post
  - b.3 Show Author after title
  - b.4 order by created_at decending order (post in posts | orderBy: created_at)
  - b.5 Click on the ROW => link to "story_url" or "url" at NEW TAB
  - c. Add "Trash" icon to remove post
```
  $scope.api.remove() = function remove () {
    $('#remove').on('click', function () {
      this.parent().destroy()
    })
  }
```

  - d.1. controller
  - d.2. factory
  - d.3. service

- Optional Module:
  - angular-moment


- Styling:
```
.post-item {
  background-color: $fff;
  border: 1px #ccc;
  color: #333;
  font-size: 13pt;
}

.author {
  font-color: #999;
}

.post-item:hover {
  background-color: $fafafa;
}
```