(function(angular) {
  'use strict';
angular.module('gifPreview', [])
  .directive('gifLoad', ['$parse', function($parse){
        return {
            restrict: 'A',
            compile: function($element, attr) {
                var fn = $parse(attr['gifLoad']);

                return function(scope, element, attr) {
                    element.on('load', function(event) {
                        scope.$apply(function() {
                            fn(scope, {$event:event});
                        });
                    });
                };

            }
        };

   }])
  .directive('gifPreview', function() {
    return {
      restrict: 'E',
      scope: {
        preview:'=preview',
        gif:'=gif'
      },
      template: '<div class="jqGifPreview">'+
        '    <div class="jqGifImageDiv"  ng-click="loadNormalImage($event)">'+
        '        <img class="jqGifImage" gif-load="onImageLoad()" src="{{imgSrc}}"/>'+
        '        <div class="jqGifCircle" ng-hide="gifActiveMode" ng-click="loadGifImage($event)" style="display: block;">'+
        '            <div class="jqGifImageCenter"></div>'+
        '            <div class="jqGifImageCircle" ng-class="{jqGifRotating:gifLoadingMode}"></div>'+
        '            <div class="jqGifImageName"></div>'+
        '        </div>'+
        '    </div> '+
        '    <div class="jqGifImageFooter" ng-hide="gifActiveMode" ngstyle="display: ;">'+
        '        <a class="jqGifImageFooterLeft" target="_blank" href="jq-gif-preview/sample_giphy.gif">'+
        '            localhost'+
        '        </a>'+
        '        <a class="jqGifImageFooterRight" target="_blank" href="jq-gif-preview/sample_giphy.gif"></a>'+
        '    </div>'+
        '</div>',
      link:function(scope, element, attr) {
       scope.imgSrc = scope.preview;
        
       scope.onImageLoad = function() {
          if(scope.gifLoadingMode) {
            scope.gifActiveMode = true;
            scope.gifLoadingMode = false;
          } else {
            scope.gifActiveMode = false;
          }
       };
       
       scope.loadGifImage = function($event) {
         scope.imgSrc = scope.gif;
         scope.gifLoadingMode = true;
         $event.stopPropagation();
       };
       
       scope.loadNormalImage = function($event) {
         scope.imgSrc = scope.preview;
         scope.gifActiveMode = false;
         scope.gifLoadingMode = false;
         $event.stopPropagation();
       };
      }
    };
  });
})(window.angular);