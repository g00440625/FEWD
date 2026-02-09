var Tasks = /** @class */ (function () {
    function Tasks() {
        this.myTasks = [];
    }
    Tasks.prototype.addTasks = function (task) {
        this.myTasks.push(task);
        console.log(task + " has been added!");
        return this.myTasks.length;
    };
    Tasks.prototype.listAllTask = function () {
        for (var i = 0; i < this.myTasks.length; i++) {
            console.log("Task: " + this.myTasks[i] + " is in my Tasks list.");
        }
    };
    Tasks.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task);
        if (index === -1) {
            console.log("The task isnt on the list");
        }
        else {
            this.myTasks.splice(index, 1);
            console.log(task + " has been deleted");
        }
        return this.myTasks.length;
    };
    return Tasks;
}());
var myTodo = new Tasks();
myTodo.addTasks("Cook");
myTodo.addTasks("Clean");
myTodo.addTasks("Work");
myTodo.listAllTask();
myTodo.deleteTask("Cook");
