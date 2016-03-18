var mouseTracker = (function($){

  var showTag = function(){
    $('.photo-container').on('click', function(event){
      var x = event.pageX - 25;
      var y = event.pageY - 25;
      
      var $tag = $('<div class="tag"></tag>');
      $tag.css({top: y, left: x})
      $('.photo-container').append($tag);
    })
  }

  return {
    showTag: showTag
  }

})($);

$(document).ready(function(){
  mouseTracker.showTag();
});