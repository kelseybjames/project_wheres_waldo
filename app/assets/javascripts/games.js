var mouseTracker = (function($){

  var showTag = function(){
    $('.photo-container').on('click', function(event){
      var x = event.pageX - 25;
      var y = event.pageY - 25;
      var $list = $('.names-list').detach();
      $('.notset').remove();
      
      var $tag = $('<div class="tag notset"></tag>');

      console.log($tag);

      $tag.css({top: y, left: x})
      $('.photo-container').append($tag);
      $tag.append($list);
      $list.show();
    })
  };

  var clickName = function() {
    $('.list-content li').on('click', function(event) {

      event.stopPropagation();
      var $newTag = $('<tag class="tag"></tag>')
      var $tag = $('.notset')
      console.log($tag.position())
      $newTag.css($tag.position());

      var $name = $('<div class="tag-name">' + $(this).html() + '</div>');
      $newTag.append($name);
      $('.photo-container').append($newTag);
    } )
  }

  return {
    showTag: showTag,
    clickName: clickName
  }

})($);

$(document).ready(function(){
  mouseTracker.showTag();
  mouseTracker.clickName();
});