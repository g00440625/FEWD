interface myTasksInterface {
    myTasks: string[];

    addTasks(task: string): number;
    listAllTask(): void;
    deleteTask(task:string):number;
}

class Tasks implements myTasksInterface {
    constructor() { }

    myTasks: string[] = [];

    addTasks(task: string): number {
        this.myTasks.push(task);
        console.log(task + " has been added!");
        return this.myTasks.length;
    }

    listAllTask() {
        for (let i = 0; i < this.myTasks.length; i++) {
        console.log("Task: " + this.myTasks[i] + " is in my Tasks list.")
    }
    }

    deleteTask(task:string):number {
        let index = this.myTasks.indexOf(task);
        if(index === -1) {
            console.log("The task isnt on the list");
        }else {
            this.myTasks.splice(index,1);
            console.log(task + " has been deleted");
        }
        return this.myTasks.length;
    }
}

let myTodo = new Tasks();
myTodo.addTasks("Cook");
myTodo.addTasks("Clean");
myTodo.addTasks("Work");
myTodo.listAllTask();
myTodo.deleteTask("Cook");