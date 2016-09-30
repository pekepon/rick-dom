angular
.module('mine', ['ui.utils'])
.run(function($rootScope) {
    var array = [],
        i;
    
    for (i=0; i<1000; i++) {
        array.push(i);
    }
  
    $rootScope.array = array;
    $rootScope.scrollTop = 0;
  
    $rootScope.onscroll = function(event) {
        $rootScope.scrollTop = event.target.scrollTop;
    };
});