var app = angular.module('myApp', ['onsen',"ui.utils"]);
app.controller('ListController', function($scope, $timeout, $http,  $q) {
  this.delegate = {
    configureItemScope: function(index, itemScope) {
      if (!itemScope.item) {
        console.log("Created newItem #" + index);
        itemScope.item = {
      
        };
        var deferred = $q.defer();
        itemScope.deferred = deferred;
         
        $http.get('http://192.168.0.100/dev/onsen/php/itemNewData1.php?offset=' + index, {
        timeout:deferred.promise
        }).success(function(data){
        if(!itemScope.item){
            return;
        }
        itemScope.item.itemId_0 = data['items'][0]['itemId'];
        itemScope.item.itemId_1 = data['items'][1]['itemId'];
        itemScope.item.itemId_2 = data['items'][2]['itemId'];
        itemScope.item.itemId_3 = data['items'][3]['itemId'];
        itemScope.item.itemId_4 = data['items'][4]['itemId'];
        itemScope.item.itemId_5 = data['items'][5]['itemId'];
        itemScope.item.itemId_6 = data['items'][6]['itemId'];
        itemScope.item.itemId_7 = data['items'][7]['itemId'];
        itemScope.item.itemId_8 = data['items'][8]['itemId'];
        itemScope.item.itemId_9 = data['items'][9]['itemId'];
        itemScope.item.itemId_10 = data['items'][10]['itemId'];
        itemScope.item.itemId_11 = data['items'][11]['itemId'];

        itemScope.item.itemTitle = data['items'][0]['itemTitle']; 
        itemScope.item.itemPrice = data['items'][0]['itemPrice'];

        }).error(function(){
          if(!itemScope.item){
            return;
          }itemScope.item.title = 'No item'; 
            itemScope.item.label = 'No cate'
        });
      }
    },
    countItems: function() {
        return 1000000;
    },
    calculateItemHeight: function() {
        return 480;
        //return ons.platform.isAndroid() ? 48 : 44;
    },
    destroyItemScope: function(index, scope) {
        console.log("Destroyed item #" + index);
    }
  };
});

app.controller('MainController', function($scope, $timeout, $http) {

$scope.item_list_thum = screen.width / 3;

});
app.controller('HomeController', function($scope, $timeout, $http) {
    $scope.tab1 = false;
    $scope.tab2 = true;
    $scope.tab3 = false;
    $scope.carouselHeight = screen.height;
    $scope.tabWidth = screen.width / 3;
});