var date = $(".date");
var event = $(".event");
var saveBtn9 = $(".save9");
var saveBtn10 = $(".save10");
var saveBtn11 = $(".save11");
var saveBtn12 = $(".save12");
var saveBtn13 = $(".save13");
var saveBtn14 = $(".save14");
var saveBtn15 = $(".save15");
var saveBtn16 = $(".save16");
var saveBtn17 = $(".save17");
var clearBtn = $("#clearBtn");

// For date and time
var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
var valueDiv = $("span").attr("value");

// var currentTime = moment().format("h A");
var currentTime = moment().hours(); 

// var now = parseInt(currentTime);
// console.log(now);


$(date).text(todaysDate);

// Function for save button and saving content in local storage
saveBtn9.on("click", function() {
  var eventText = $(event).val();
  localStorage.setItem("events", JSON.stringify(eventText));
})

saveBtn10.on("click", function() {
  var eventText = $(event).val();
  localStorage.setItem("events", JSON.stringify(eventText));
})

saveBtn11.on("click", function() {
  var eventText = $(event).val();
  localStorage.setItem("events", JSON.stringify(eventText));
})

saveBtn12.on("click", function() {
  var eventText = $(event).val();
  localStorage.setItem("events", JSON.stringify(eventText));
})

saveBtn13.on("click", function() {
  var eventText = $(event).val();
  localStorage.setItem("events", JSON.stringify(eventText));
})

saveBtn14.on("click", function() {
  var eventText = $(event).val();
  localStorage.setItem("events", JSON.stringify(eventText));
})

saveBtn15.on("click", function() {
  var eventText = $(event).val();
  localStorage.setItem("events", JSON.stringify(eventText));
})

saveBtn16.on("click", function() {
  var eventText = $(event).val();
  localStorage.setItem("events", JSON.stringify(eventText));
})

saveBtn17.on("click", function() {
  var eventText = $(event).val();
  localStorage.setItem("events", JSON.stringify(eventText));
})

// Function for changing color scheme when time is past, present, future
function colorChange() {
  
  $(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    
    console.log(blockHour + "|" + currentTime);
    console.log(typeof blockHour);
    console.log(currentTime);
    console.log(typeof currentTime);

    if(blockHour < currentTime) {
      $(this).children(".text").removeClass("future");
      $(this).children(".text").removeClass("present");
      $(this).children(".text").addClass("past");
    }
    else if(blockHour == currentTime) {
      $(this).children(".text").removeClass("past")
      $(this).children(".text").removeClass("future");
      $(this).children(".text").addClass("present");
    }
    else if(blockHour > currentTime) {
      $(this).children(".text").removeClass("present");
      $(this).children(".text").removeClass("past");
      $(this).children(".text").addClass("future");
    }

  })
}

colorChange();


