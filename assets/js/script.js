var timeDisplayEl = $('#time-display');

// Function to display time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}



setInterval(displayTime, 1000);