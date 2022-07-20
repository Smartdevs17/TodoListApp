window.addEventListener("load",function (){
    const form = document.querySelector('.task-form');
    const input = document.querySelector(".input-task")
    const tas = document.querySelector(".tasks")

    form.addEventListener("submit",function(e){
        e.preventDefault()
        const task = input.value;
        //console.log(task)
        if (task === "") {
          alert("ivalid, please add a task!");
        }
        const firstDiv = document.createElement("div");
        firstDiv.classList.add("task")

        const secondDiv = document.createElement("div")
        secondDiv.classList.add("task-content")
        firstDiv.appendChild(secondDiv)

        const inputDiv = document.createElement("input");
        inputDiv.classList.add("input-text")
        inputDiv.setAttribute("readonly","readonly")
        inputDiv.type = "text";
        inputDiv.value = task;
        secondDiv.appendChild(inputDiv)

        const btnDiv = document.createElement("div");
        btnDiv.classList.add("actions");

        const btnOne = document.createElement("button")
        btnOne.classList.add("edit-btn");
        btnOne.innerHTML = "Edit"
        const btnTwo = document.createElement("button");
        btnTwo.classList.add("delete-btn");
        btnTwo.innerHTML = "Delete"

        btnDiv.appendChild(btnOne)
        btnDiv.appendChild(btnTwo)

        firstDiv.appendChild(btnDiv)
        // console.log(firstDiv)
        tas.appendChild(firstDiv)
        input.value = "";
        btnOne.addEventListener("click",() => {
            inputDiv.removeAttribute("readonly")
            inputDiv.focus();
            inputDiv.innerHTML = "Saved";
        })
        btnTwo.addEventListener("click",() => {
            tas.removeChild(firstDiv)
        })

    });
    
});