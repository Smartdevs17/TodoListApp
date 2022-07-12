window.addEventListener("load",() => {
    //Get Form
    const form = document.querySelector(".task-form");

    //Get Input Value
    const input = document.querySelector(".input-task");

    //Get Task Element
    const tasks = document.querySelector(".tasks");


    

    
    //Attach an event to listen for a submit event
    form.addEventListener("submit",(e) => {
        e.preventDefault();

        //task input value
        const task = input.value;

 


        //Check if no input was added and submit button was clicked
        if(!task){
            alert("Please add a task to be submitted!");
            return;
        }

        //Create a div Element to contain to be the parent element
        const taskElement = document.createElement("div");

        // Attach a class named task to the div
        taskElement.classList.add("task");

        // Create another html div and attach a class named task-content
        const taskContent = document.createElement("div");
        taskContent.classList.add("task-content");

        //Put the taskContent class named task-content into it parent div class task
        taskElement.appendChild(taskContent);

        //Create a html input to hold the created task give it a class name of input-text
        const taskInput = document.createElement("input");
        taskInput.classList.add("input-text");
        taskInput.type = "text";
        taskInput.value = task;

        //Set an attribute to the input element a readonly that makes it uneditble
        taskInput.setAttribute("readonly","readonly");

        //Add the task input to the text-content to be displayed on the page
        taskContent.appendChild(taskInput);

        //Create the div that holds all the Edit and Delete button
        const taskAction = document.createElement("div");
        taskAction.classList.add("actions");

        // Create  edit button and add a class named edit-btn
        const taskEditBtn = document.createElement("button");
        taskEditBtn.classList.add("edit-btn");
        taskEditBtn.innerHTML = "Edit"

        //Create delete button with a class named delete-btn
        const taskDeleteBtn = document.createElement("button");
        taskDeleteBtn.classList.add("delete-btn");
        taskDeleteBtn.innerHTML = "Delete";

        
        //Attach the edit button and delete button to their parent element the div with class named actions
        taskAction.appendChild(taskEditBtn);
        taskAction.appendChild(taskDeleteBtn);

        // Attach the action div to the taskElement
        taskElement.appendChild(taskAction);

        //Attach all the task div to it parent element div with class named tasks
        tasks.appendChild(taskElement);
        input.value = "";

        //Event listener to make the edit button editable when clicked
        taskEditBtn.addEventListener("click",() => {
            if(taskEditBtn.innerHTML.toLowerCase() === "edit"){
                taskInput.removeAttribute("readonly");
                taskInput.focus();
                taskEditBtn.innerHTML = "Save";
            }else{
                taskInput.setAttribute("readonly","readonly");
                taskEditBtn.innerHTML = "Edit";
            }
        });

        //Event Listener to make the delete button deleteItem when clicked
        taskDeleteBtn.addEventListener("click",() => {
            tasks.removeChild(taskElement);
        });
    });  

});