var WALDO = WALDO || {};

WALDO.tags = (function() {
  var checkProp = function() {
    $('.stop-prop').click(function(event) {
      var queryString = event.target.href.split('?')[1];
      $.ajax({
        url: '/game/tags',
        type: 'post',
        dataType: 'script',
        data: queryString,
        success: function(data) {
        }
      });
      event.preventDefault();
      event.stopPropagation();
    });
  };

  return {
    checkProp: checkProp,
  }
})();

$(document).ready(function() {
  WALDO.tags.checkProp();
})