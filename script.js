// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var savebtnEl = $('.saveBtn')

  savebtnEl.on('click', function () {
    //"this" refers to the timebox the saved button was clicked in
    var description = $(this).children().eq(1).val();
    var time = $(this).children().eq(0).contents();

    localStorage.setItem(time, description);
  })
  
  console.log();
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  //WRITE IF STATEMENTS
  //LOOP
  var currentTime = dayjs().format('h');
  var pastEl = $('textarea').addClass('past');
  var presentEl = $('textarea').addClass('present');
  var futureEl = $('textarea').addClass('future');
  
  console.log(currentTime)
  //class timeblock select as element to be looped
  $('.timeblock').each(function () {
    if (currentTime === $(this).parent().attr("id")) {
      presentEl;
    } else if (currentTime < $(this).parent().attr("id")) {
      pastEl;
    } else {
      futureEl
    }
   console.log(currentTime);
  });

  console.log();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  var inputEL = $('.description');
  currentTime = dayjs().format('h[:]mm');

  console.log();
  // TODO: Add code to display the current date in the header of the page.

  //Vanilla Javascript
  //var dateEl = document.getElementById("currentDay");
  //var realDate = dayjs().format('dddd, MMMM D');
  //var ordinal = realDate + ( [,'st','nd','rd'][/1?.$/.exec(realDate)] || 'th' );
  //dateEl.textContent = ordinal;

  var today = dayjs();
  $('#currentDay').text(
    today.format('dddd, MMMM D')
  )

  console.log();
});
