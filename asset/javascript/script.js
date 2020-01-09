var date = $(".date");
var event = $(".event");
var saveBtn = $(".save");
var clearBtn = $("#clearBtn");

// For date and time
var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
var valueDiv = $("span").attr("value");
var currentTime = moment().format('h'); 
var now = parseInt(currentTime);


$(date).text(todaysDate);

// Function for save button and saving content in local storage
saveBtn.on("click", function() {
  var eventText = $(event).val();
  localStorage.setItem("events", JSON.stringify(eventText));
})

// Function for changing color scheme when time is past, present, future
function colorChange() {
  
  $(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    
    console.log(blockHour);
    console.log(typeof blockHour);
    console.log(now);
    console.log(typeof now);
    if(blockHour < now) {
      event.addClass("past");
    }
    else if(blockHour == now) {
      event.removeClass("past")
      event.addClass("present");
    }
    else if(blockHour > now) {
      event.removeClass("present");
      event.removeClass("past");
      event.addClass("future");
    }
  })
}

colorChange();

