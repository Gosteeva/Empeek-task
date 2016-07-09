(function(){
  var app = angular.module('task',['directives']);

  app.controller('ItemsController', ['$http', function($http){
    var hack = this;
    hack.items=[];
    this.listtab = 2;

    $http.get('../data/itmarr.json').success(function(data){
      hack.items  = data;
    });

    this.addItem = function(){
      this.items.push({element:this.element, comments: []});
      this.element = '';
    };

    this.deleteItem = function(item){
      this.items.splice(this.items.indexOf(item), 1);
    };

    this.setListTab = function(idx){
      hack.listtab = idx+1;
    };

    this.selectedListTab = function (chklstTab){
      return hack.listtab === chklstTab;
    };
  }]);

  app.controller('NavController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });
})();
