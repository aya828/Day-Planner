var date = $(".date");
var event = $("#text");
var saveBtn = $("#saveBtn");
var clearBtn = $("#clearBtn");

// For date and time
var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$(date).text(todaysDate);

// Function for timeblock by hour

// Function for save button and saving content in local storage
saveBtn.on("click", function() {
  var eventText = $(event).val();
  localStorage.setItem("events", JSON.stringify(eventText));
})

// Function for clear button, clearing content in field and in local storage
clearBtn.on("click", function() {
  event.val("");
})

// Function for changing color scheme when time is past, present, future