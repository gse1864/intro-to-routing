//I need to use a PeopleListController and a list_of_people template, replace the ...

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when( '/people' , {
        templateUrl: 'templates/list_of_people',
        controller: 'PeopleListController'
    })

//I have a route called people and I'm looking at 1 person, replace the ...

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when( '/people/:peopleId' , {
        templateUrl: 'templates/person_details.html',
        controller: 'PersonDetailsController'
    })

//I have a route called settings with a matching controller and template, replace the ...

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when( '/settings' , {
        templateUrl: 'template/settings_template.html',
        controller: 'SettingsController'
    })

//I have a route called people and I'm looking at 1 person.  I also have a sub-route called activities and I'm looking at a specific activity, replace the ...


.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider. 
      when( '/people/:peopleId/activity/:activityId' , {
        templateUrl: "template/activity.html",
        controller: "ActivityController"
    })