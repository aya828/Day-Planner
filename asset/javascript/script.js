var date = $(".date");
var event = $(".event");
var saveBtn9 = $(".save9");
var saveBtn10 = $(".save10");
var saveBtn11 = $(".save11");
var clearBtn = $("#clearBtn");

// For date and time
var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
var valueDiv = $("span").attr("value");
var currentTime = moment().format('h'); 
var now = parseInt(currentTime);


$(date).text(todaysDate);

// Function for save button and saving content in local storage
saveBtn9.on("click", function() {
  var eventText = $(event).val();
  localStorage.setItem("events", JSON.stringify(eventText));
})

// Function for changing color scheme when time is past, present, future
function colorChange() {
  
  $(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    
    console.log(blockHour + "|" + now);
    console.log(typeof blockHour);
    console.log(now);
    console.log(typeof now);
    if(blockHour < now) {
      $(this).children(".text").removeClass("future");
      $(this).children(".text").removeClass("present");
      $(this).children(".text").addClass("past");
    }
    else if(blockHour == now) {
      $(this).children(".text").removeClass("past")
      $(this).children(".text").removeClass("future");
      $(this).children(".text").addClass("present");
    }
    else if(blockHour > now) {
      $(this).children(".text").removeClass("present");
      $(this).children(".text").removeClass("past");
      $(this).children(".text").addClass("future");
    }
  })
}

colorChange();


