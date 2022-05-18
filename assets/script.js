
  var timeRowNine = $("<div>").addClass("row time-block");
  var theHourNine = $("<div>").addClass("col-1 hour").text("9AM");
  var descriptionNine = $("<div>").addClass("col-10 future description").attr("id", "taskAreaNine");
  var buttonNine = $("<button>").addClass("col-1 saveBtn btn").attr("id", "saveNine");
  var saveIconNine = $("<i>").addClass("fa-solid fa-floppy-disk")

  var timeRowTen = $("<div>").addClass("row time-block");
  var theHourTen = $("<div>").addClass("col-1 hour").text("10AM");
  var descriptionTen = $("<div>").addClass("col-10 future description").attr("id", "taskAreaTen");
  var buttonTen = $("<button>").addClass("col-1 saveBtn btn").attr("id", "saveTen");
  var saveIconTen = $("<i>").addClass("fa-solid fa-floppy-disk")



  function createTable() {
    $(timeRowNine).append(theHourNine);
    $(timeRowNine).append(descriptionNine);
    $(timeRowNine).append(buttonNine);
    $(buttonNine).append(saveIconNine);
    $(timeRowTen).append(theHourTen);
    $(timeRowTen).append(descriptionTen);
    $(timeRowTen).append(buttonTen);
    $(buttonTen).append(saveIconTen);
    $(".container").append(timeRowNine);
    $(".container").append(timeRowTen);
  }
  createTable()


// function createOneRow() {
//   var timeRow = $("<div>").addClass("row time-block");
//   var theHour = $("<div>").addClass("col-1 hour");
//   var description = $("<div>").addClass("col-10 future description");
//   var button = $("<button>").addClass("col-1 saveBtn btn");
//   var saveIcon = $("<i>").addClass("fa-solid fa-floppy-disk")
//   $(timeRow).append(theHour);
//   $(timeRow).append(description);
//   $(timeRow).append(button);
//   $(button).append(saveIcon)
//   $(".container").append(timeRow)
// }


// function createAllRows() {
//   for (var i = 0; i <= 8; i++) {
//     createOneRow();
//   }
// }

// createAllRows();


















////////////////////////////////////////////////////EVENT LISTENER CODE
// var hourNine = [];
// var nineTextArea;
// var hourNineDiv = document.querySelector("hour-nine")

// $("#hour-nine").on("click", function() {
//   nineTextArea = $("<textarea>").addClass("col-10").attr("id","nineArea");
//   $('#hour-nine').replaceWith(nineTextArea);
//   nineTextArea.trigger("focus");
// });


// $("#nine-save").on("click", function() {
//     var nineText = nineTextArea.val()
//     hourNine.push(nineText)
//     saveTasks()
//     newNineDiv = $("<div>").addClass("col-10 future description").attr("id", "hour-nine");
//     $("#nineArea").replaceWith(newNineDiv)
//     displayTasks()
// })

// var saveTasks = function() {
//   localStorage.setItem("tasks", JSON.stringify(hourNine));
// };

// var displayTasks = function() {
//   var nineTasks = JSON.parse(localStorage.getItem("tasks"));
//   console.log(nineTasks)
//   for (var i = 0; i < nineTasks.length; i++) {
//     var nineTasksP = $("<p>").text(nineTasks)
//     $("#hour-nine").append(nineTasksP)
//   }
// };
