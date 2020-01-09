var date = $(".date");
var event = $(".event");
var saveBtn = $(".save");
var clearBtn = $("#clearBtn");

var hour9 = $("#hour9");
var hour10 = $("#hour10");
var hour11 = $("#hour11");
var hour12 = $("#hour12");
var hour1 = $("#hour1");
var hour2 = $("#hour2");
var hour3 = $("#hour3");
var hour4 = $("#hour4");
var hour5 = $("#hour5");


// For date and time
var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$(date).text(todaysDate);

// Function for save button and saving content in local storage
saveBtn.on("click", function() {
  var eventText = $(event).val();
  localStorage.setItem("events", JSON.stringify(eventText));
})

// Function for changing color scheme when time is past, present, future


