$(document).ready(function (){
  var currentFloor = 2;
  var counterUp = $('.counter-up');
  var counterDown = $('.counter-down');
  var floorPath = $(".home-image path");
  floorPath.mouseover(function(){
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });
  counterUp.click(function(){
    if(currentFloor < 18)
    {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  counterDown.click(function(){
    if(currentFloor > 2)
    {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
});
