

var hourNine = [];
var nineTextArea;
var hourNineDiv = document.querySelector("hour-nine")

$("#hour-nine").on("click", function() {
  nineTextArea = $("<textarea>").addClass("col-10").attr("id","nineArea");
  $('#hour-nine').replaceWith(nineTextArea);
  nineTextArea.trigger("focus");
});


$("#nine-save").on("click", function() {
    var nineText = nineTextArea.val()
    hourNine.push(nineText)
    saveTasks()
    newNineDiv = $("<div>").addClass("col-10 future description").attr("id", "hour-nine");
    $("#nineArea").replaceWith(newNineDiv)
    displayTasks()
})

var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(hourNine));
};

var displayTasks = function() {
  var nineTasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(nineTasks)
  for (var i = 0; i < nineTasks.length; i++) {
    var nineTasksP = $("<p>").text(nineTasks)
    $("#hour-nine").append(nineTasksP)
  }
};
