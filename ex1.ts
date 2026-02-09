let myTasks: string[] = [];


let addTask = (task: string): number => {
    myTasks.push(task);
    console.log(task + " has been added!");
    return myTasks.length;
}

function listAllItems(): void {
    for (let i = 0; i < myTasks.length; i++) {
        console.log("Task: " + myTasks[i] + " is in my Tasks list.")
    }
}

let deleteTask = (task: string): number => {
    let index = myTasks.indexOf(task);
    if (index === -1) {
        console.log("The task is not in the list");
    } else {
        myTasks.splice(index, 1);
        console.log(task + " has been deleted")
    }
    return myTasks.length;
}



addTask("Work");
addTask("Eat");
listAllItems();
deleteTask("Eat");
listAllItems();