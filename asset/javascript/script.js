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
var input9 = $("#input9");
var input10 = $("#input10");
var input11 = $("#input11");
var input12 = $("#input12");
var input13 = $("#input13");
var input14 = $("#input14");
var input15 = $("#input15");
var input16 = $("#input16");
var input17 = $("#input17");

// For date and time
var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
var valueDiv = $("span").attr("value");

// var currentTime = moment().format("h A");
var currentTime = moment().hours(); 
$(date).text(todaysDate);

// Function for save button and saving content in local storage
function saveBtn(key, inputTag) {
  localStorage.setItem(key, inputTag.val());
}

// Calling saveBtn function for each button
saveBtn9.on("click", () => saveBtn("9", input9));
saveBtn10.on("click", () => saveBtn("10", input10));
saveBtn11.on("click", () => saveBtn("11", input11));
saveBtn12.on("click", () => saveBtn("12", input12));
saveBtn13.on("click", () => saveBtn("13", input13));
saveBtn14.on("click", () => saveBtn("14", input14));
saveBtn15.on("click", () => saveBtn("15", input15));
saveBtn16.on("click", () => saveBtn("16", input16));
saveBtn17.on("click", () => saveBtn("17", input17));

// Function for getting text from local storage
function lastEvent(key, inputTag) {
  var item = localStorage.getItem(key);
  if(item != null) {
    inputTag.val(item);
  }
}

// Calling lastEvent function
lastEvent("9", input9);
lastEvent("10", input10);
lastEvent("11", input11);
lastEvent("12", input12);
lastEvent("13", input13);
lastEvent("14", input14);
lastEvent("15", input15);
lastEvent("16", input16);
lastEvent("17", input17);

// Function for changing color scheme when time is past, present, future
function colorChange() {
  
  $(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);

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


