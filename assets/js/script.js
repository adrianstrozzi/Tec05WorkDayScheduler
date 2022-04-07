// JQuery for selecting time display ID
var timeDisplayEl = $('#time-display');


// Function to Display date and time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

// One Second time interval
setInterval(displayTime, 1000);


// Function for coloring the Text Area
function colorTextArea() {

  // var scheduleHour = $(".hour").text();

  let currentTime = moment().format('hh a');

  let scheduleHour = [
    $("#0").text(),
    $("#1").text(),
    $("#2").text(),
    $("#3").text(),
    $("#4").text(),
    $("#5").text(),
    $("#6").text(),
    $("#7").text(),
    $("#8").text(),
  ]

  console.log(scheduleHour);
  console.log(currentTime);

  //Remove Old classes from the element
  $(".hour").removeClass(".present .past .future");


  for (let i = 0; i < scheduleHour.length; i++) {
    console.log(scheduleHour[i]);
    if (currentTime > scheduleHour[i]) {
      $(".description").addClass("past");
    }
    else if (currentTime < scheduleHour[i]) {
      $(".description").addClass("future");
    }
    else if (currentTime === scheduleHour[i]) {
      $(".description").addClass("present");
    }
  }
}

colorTextArea();