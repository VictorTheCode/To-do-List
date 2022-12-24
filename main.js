const containerEl = document.getElementById("container");
const inputEl = document.getElementById("inputEl");
const ul = document.getElementById("ulEl");
const btn = document.querySelector(".addbtn");
const ulEl = document.querySelector("ul");

// Create a close button and append it to each list item
let li_items = document.getElementsByTagName("li");


//load the last input 
document.addEventListener("DOMContentLoaded", getList);

//Loop through each li item

let i = "";
for (let i = 0; i < li_items.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li_items[i].appendChild(span);
}


// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let j ="";
for (let j = 0; j < close.length; j++) {
    close[j].onclick = function() {
// Close the li element
        let div = this.parentElement;
        div.style.display = "none";
    }    
}


// Add a checked symbol for each completd list
ulEl.addEventListener('click', (e)=> {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
    }
}, false);


// Create a new list item when clicking on the add button 
function addEl() {
    saveList(inputEl.value);

    let li = document.createElement("li");
    let inputValue = document.getElementById("inputEl").value;
    let textEl = document.createTextNode(inputValue);
    if (inputValue === '') {
        alert("You Must input something")
    } else {
        ul.appendChild(li);
    }
    li.appendChild(textEl);
            
    inputEl.value = "";
  

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none"
        }
        
    }

    ulEl.addEventListener('click', (e)=> {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle('checked');
        }
    }, false);
}



// function deleteBtn(s) {
//     const taskList = s.target

//     // DELETE EACH Task item

//     if (taskList.classList[0] === "close") {
//         const div = taskList.parentElement;
//         removeLocalTask(div)
//             tasks.addEventListener("click", ()=> {
//                 tasks.remove();
//             })
//     }
// }





// Localstorage 

function saveList(todo_list) {
    // Check if list is lolist is a initailly available

    let listEl;
    if (localStorage.getItem('listEl') === null) {
        listEl = [];
    } else {
        listEl = JSON.parse(localStorage.getItem("listEl"))
    }

    listEl.push(todo_list);
    localStorage.setItem("listEl", JSON.stringify(listEl))
}


function getList() {
    // Check if list is lolist is a initailly available
    let listEl;
    if (localStorage.getItem('listEl') === null) {
        listEl = [];
    } else {
        listEl = JSON.parse(localStorage.getItem("listEl"))
    }

    listEl.forEach((to_list) => {
        // to_list.preventDefault;
        let li = document.createElement("li");
        li.innerText = to_list
        let inputValue = document.getElementById("inputEl").value;
        let textEl = document.createTextNode(inputValue);
        li.appendChild(textEl);
        ul.appendChild(li);             
        inputEl.value = "";
      
    
        let span = document.createElement("span");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
    
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                let div = this.parentElement;
                div.style.display = "none"
            }
            
        }        
    });
}


function removeLocalTask(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    const taskList = task.children[0].innerText;
    tasks.splice(tasks.indexOf(taskList), 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// localStorage.clear()