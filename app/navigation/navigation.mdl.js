(function() {

  angular.module('Navigation', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "../partials/navigation/home.html"
      })
      .state('about', {
        url: "/about",
        templateUrl: "../partials/navigation/about.html",
        controller: "AboutCtrl"
      })
      .state('contact', {
        url: "/contact",
        templateUrl: "../partials/navigation/contact.html",
        controller: "ContactCtrl"
      });

  });


})();
