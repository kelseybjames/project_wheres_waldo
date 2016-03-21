var WALDO = WALDO || {};

WALDO.tags = (function() {
  var checkProp = function() {
    $('.stop-prop').click(function(event) {
      $.ajax({
        url: '/game/tags',
        type: 'post',
        dataType: 'script',
        success: function(data) {

        }
      });
      event.preventDefault();
      event.stopPropagation();
    });
  };

  return {
    checkProp: checkProp
  }
})();

$(document).ready(function() {
  WALDO.tags.checkProp();
})