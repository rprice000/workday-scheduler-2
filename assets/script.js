// js here
var tasks = {};
///////////////////////////// CREATE TASK FUNCTION START
var createTask = function(taskText, taskHour) {
  var taskContainer = $("<div>").addClass("p-task-container");
  var taskP = $("<p>").text(taskText);

  taskContainer.append(taskP);

  $("#hour-" + taskHour).append(taskContainer)
}
///////////////////////////// CREATE TASK FUNCTION END
///////////////////////////// LOAD TASK FUNCTION START
var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));

  if (!tasks) {
    tasks = {
      nine: [],
      ten: [],
      eleven: [],
      twelve: [],
      one: [],
      two: [],
      three: [],
      four: [],
      five: [],
    }
  }

  $.each(tasks, function(list, arr) {
    console.log(list, arr);

    arr.forEach(function(task) {
      createTask(task.text, hour)
    })
  })
};
///////////////////////////// LOAD TASK FUNCTION END
///////////////////////////// SAVE TASK FUNCTION START
var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
///////////////////////////// SAVE TASK FUNCTION END
/////////////////////////////EVENT LISTENER FOR WHEN CLICK TO EDIT A TASK START
$(".description").on("click", "p", function() {

  var text = $(this).text().trim();

  var textInput = $("<textarea>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);

  textInput.trigger("focus");
});
/////////////////////////////EVENT LISTENER FOR WHEN CLICK TO EDIT A TASK END
/////////////////////////////EVENT LISTENER FOR WHEN CLICK OFF OF EDIT TASK START
// editable field was un-focused
$(".description").on("blur", "textarea", function() {
  // get current value of textarea
  var text = $(this).val();

  // get status type and position in the list
  var status = $(this)
    .closest(".list-group")
    .attr("id")
    .replace("list-", "");
  var index = $(this)
    .closest(".list-group-item")
    .index();

  // update task in array and re-save to localstorage
  tasks[status][index].text = text;
  saveTasks();

  // recreate p element
  var taskP = $("<p>")
    .addClass("m-1")
    .text(text);

  // replace textarea with new content
  $(this).replaceWith(taskP);
});
/////////////////////////////EVENT LISTENER FOR WHEN CLICK OFF OF EDIT TASK END

$('#hour-nine').click(function(){
  alert("YOU GOT ME");
  var taskTextArea = $("<textarea>").addClass("col-10")
  $('#hour-nine').replaceWith(taskTextArea)
})