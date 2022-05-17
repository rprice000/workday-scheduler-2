tasks = {
  hourNine: []
}
var nineTextArea;
var hourNineDiv = document.querySelector("hour-nine")

$("#hour-nine").on("click", function() {
  nineTextArea = $("<textarea>").addClass("col-10").attr("id","nineArea");
  $('#hour-nine').replaceWith(nineTextArea);
  nineTextArea.trigger("focus");
});


$("#nine-save").click(function() {
    var nineText = nineTextArea.val()

    tasks.hourNine.push({
      text: nineText
    })
  saveTasks()
  newNineDiv = $("<div>").addClass("col-10 future description").attr("id", "hour-nine");
  $("#nineArea").replaceWith(newNineDiv)
  displayTasks()
})

var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

var displayTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(tasks.text)
};