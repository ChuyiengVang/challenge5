

$(document).ready(function () {

  var savebtnEl = $('.saveBtn')

  savebtnEl.on('click', function () {
    //"this" refers to the the individual div timebox the saved button was clicked in 
    //siblings(class) finds siblings with the selected class
    var description = $(this).siblings('.description').val();

    var time = $(this).parent().attr('id');
    //no quotes for the key, copies the parent's id and uses it as the key
    localStorage.setItem(time, description);
  })
  
  console.log();

  //WRITE IF STATEMENTS
  //LOOP

  var currentTime = dayjs().hour();
  console.log(currentTime)

  //class time-block select as element class to be looped
  $('.time-block').each(function () {
    //split() turns class hour-# into substring
    var timeBlockHour = $(this).attr("id").split('hour-')[1];

    if (timeBlockHour == currentTime) {

        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
        
    } else if (timeBlockHour < currentTime) {
      
        $(this).removeClass('present');
        $(this).removeClass('future');      
        $(this).addClass('past');

    } else {

        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');

    }

   console.log();

  });

  //value from the key, ex. hour-9, from localStorage will
  //be shown in the textarea of the time-block div, with 
  //the same id as the key

  $("#hour-9 textarea").val(localStorage.getItem("hour-9"));
  $("#hour-10 textarea").val(localStorage.getItem("hour-10"));
  $("#hour-11 textarea").val(localStorage.getItem("hour-11"));
  $("#hour-12 textarea").val(localStorage.getItem("hour-12"));
  $("#hour-13 textarea").val(localStorage.getItem("hour-13"));
  $("#hour-14 textarea").val(localStorage.getItem("hour-14"));
  $("#hour-15 textarea").val(localStorage.getItem("hour-15"));
  $("#hour-16 textarea").val(localStorage.getItem("hour-16"));
  $("#hour-17 textarea").val(localStorage.getItem("hour-17"));
  $("#hour-18 textarea").val(localStorage.getItem("hour-18"));

  //Vanilla Javascript
  var dateEl = document.getElementById("currentDay");
  var realDate = dayjs().format('dddd, MMMM D');
  var ordinal = realDate + ([,'st','nd','rd'][/1?.$/.exec(realDate)] || 'th' );
  dateEl.textContent = ordinal;

 //jQuery
  //var today = dayjs();
  //$('#currentDay').text(
   // today.format('dddd, MMMM D')
 // )

  console.log();
});
