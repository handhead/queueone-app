angular.module('starter.directives', [])

  .directive('backgroundImage', function () {
    return function (scope, element, attrs) {
      var url = attrs.backgroundImage;
      //var size = attrs.size || 'cover';
      element.css({
        'background-image': 'url(' + url + ')',
        'background-size': 'cover',
        'background-position': 'center',
        'width': '100%',
        'height': '100%'
      });
    };
  });
