//Requires JQuery
//Created By Armin

$(window).on("load",function() {
	$(window).scroll(function() {handleScrollAnimation();});
	$(window).resize(function() {handleScrollAnimation();});
	handleScrollAnimation();
});

function handleScrollAnimation(){
	var windowTop = $(this).scrollTop();
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();

    $(".expr").each(function() {
      /* Check the location of each desired element */
      var triggerAt = 150;
      var objectTop =  $(this).offset().top;
      var objectBottom = $(this).offset().top + triggerAt;
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom && objectBottom > windowTop) {
        $(this).addClass("zoom");
      }
      else{
      	$(this).removeClass("zoom");
      }
    });
}