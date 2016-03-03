# angGifPreview
AngularJS Directive For GIF Preview As Like Facebook
###Explanation
[Click here] (http://blog.sodhanalibrary.com/2016/03/facebook-like-gif-preview-using.html) to read complete explanation
###Demo
[Click here] (http://demo.sodhanalibrary.com/angular/gif_preview/angGifPreview/demo.html) to see demo

##Implementation
###Add AngularJS 
```js
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
```
###Add CSS and JS files
```js
<link rel="stylesheet" href="angGifPreview/angGifPreview.css" />
<script src="angGifPreview/angGifPreview.js"></script>
```
###HTML 
```js
<gif-preview preview="previewImage" gif="gifImage"></gif-preview>
```
####Attributes
**gif** : gif image path

**preview** : gif preview image path
##JS Code
import **gifPreview** module as like shown in below code
```js
(function(angular) {
	'use strict';
	angular.module('sampleExample', ['gifPreview'])
	  .controller('Controller', ['$scope', function($scope) {
	      $scope.previewImage = 'sample_first_frame.png';
	      $scope.gifImage = 'sample_giphy.gif';
	}]);
})(window.angular);
```
