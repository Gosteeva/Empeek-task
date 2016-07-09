(function(){
  var app = angular.module('directives',[]);

  app.directive('listItems',function(){
    return{
      restrict: 'E',
      templateUrl: '/templates/list-temp.html'
    };
  });

  app.directive('sideNav', function(){
    return{
      restrict: 'E',
      templateUrl: '/templates/sidenav-temp.html'
    };
  });

  app.directive('listComment', function(){
    return{
      restrict: 'E',
      templateUrl: '/templates/comments-list-temp.html'
    };
  });
})();
