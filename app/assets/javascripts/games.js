var mouseTracker = (function($){

  var showTag = function(){
    $('.photo-container').on('click', function(event){
      var x = event.pageX - 25;
      var y = event.pageY - 25;
      
      var $tag = $('<div class="tag"></tag>');
      $tag.css({top: y, left: x})
      $('.photo-container').append($tag);
      $tag.append($('.names-list'));
      $('.names-list').show();
    })
  }

  var createTag = function() {
    $('.photo-container').mousemove(function(event) {
      var x = event.pageX - 25;
      var y = event.pageY - 25;

      var $tag = $('.tag hidden');
      $tag.css({top: y, left: x});
    })
  }

  return {
    showTag: showTag,
    createTag: createTag
  }

})($);

$(document).ready(function(){
  mouseTracker.showTag();
});