var app = angular.module('myApp', ['onsen',"ui.utils"]);
app.controller('ListController', function() {
    this.delegate = {
      configureItemScope: function(index, itemScope) {
        itemScope.item = 'Item ' + index;
      },
      countItems: function() {
        return 10000;
      },
      calculateItemHeight: function() {
        return ons.platform.isAndroid() ? 48 : 44;
      }
    };
  });

app.controller('MainController', function($scope, $timeout, $http) {

 //var scrollTop = document.documentElement.scrollTop;
 //var scrollTop = document.body.scrollTop;
 //var scroll = this.scrollTop;
//console.log(scrollTop);

});
app.run(function($rootScope) {
    var array = [],
        i;
    
    for (i=0; i<1000; i++) {
        array.push(i);
    }
  
    $rootScope.array = array;
    $rootScope.scrollTop = 0;
    
    stopScrollTop = 0;
    activeScrollTop = 0;
    i = 0;
    //$rootScope.isTranslateUp = false;
    //$rootScope.isTranslateDown = false;
    $rootScope.onscroll = function(event) {
        $rootScope.scrollTop = event.target.scrollTop;
        //activeScrollTop = event.target.scrollTop;

        //$rootScope.translateY = event.target.scrollTop;
        if (event.target.scrollTop > stopScrollTop && i < 35) {
            i++;
            $rootScope.translateY = - i;
            console.log(i);
        } else if (event.target.scrollTop < stopScrollTop && i > 0) {
            i--;
            $rootScope.translateY = - i;
            console.log(i);
        }
        stopScrollTop = event.target.scrollTop;

        if (stopScrollTop <= activeScrollTop) {
            //console.log(activeScrollTop);
            //$rootScope.isTranslateUp = true;
            //$rootScope.isTranslateDown = false;
            //stopScrollTop = activeScrollTop;
        } else if (stopScrollTop - 100 >= activeScrollTop) {
            //$rootScope.isTranslateUp = false;
            //$rootScope.isTranslateDown = true;
            //stopScrollTop = activeScrollTop;
        }

    };

    
});