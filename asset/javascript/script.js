var date = $(".date");
var event = $("#text").value;
var saveBtn = $("#saveBtn");
var clearBtn = $("#clearBtn");

// For date and time
var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$(date).text(todaysDate);

// Function for timeblock by hour

// Function for save button
saveBtn.on("click", function() {
  console.log(event);
  debugger
  $("#text").text(localStorage.setItem("events", event));
})


// Funtcion for saving content into local storage 

// Function for clear button, clearing content in field and in local storage

// Function for changing color scheme when time is past, present, future