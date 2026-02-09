var myTasks = [];
var addTask = function (task) {
    myTasks.push(task);
    console.log(task + " has been added!");
    return myTasks.length;
};
function listAllItems() {
    for (var i = 0; i < myTasks.length; i++) {
        console.log("Task: " + myTasks[i] + " is in my Tasks list.");
    }
}
var deleteTask = function (task) {
    var index = myTasks.indexOf(task);
    myTasks.splice(index, 1);
    console.log(task + " has been deleted");
    return myTasks.length;
};
addTask("Work");
addTask("Eat");
listAllItems();
deleteTask("Eat");
listAllItems();
