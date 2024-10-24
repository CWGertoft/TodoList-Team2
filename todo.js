let data = [
    {
        id: 1,
        task: "mata krokodilen",
        complete: true
    },
    {
        id: 2,
        task: "hämta barnen",
        complete: false
    },
    {
        id: 3,
        task: "rasta krokodilen",
        complete: false
    },
    {
        id: 4,
        task: "lina e bäst på DOM",
        complete: false
    }
]

//hämta input från domen
const input = document.getElementById("text1");

//hämta knapp från domen
const btn = document.getElementById("btn-add");

//hämta listan från domen
const list = document.getElementById("Todo-list");


//render list funktion
function renderList() {
list.innerHTML=""
    //loopa ut data arrayen
    for (let item of data) {
        //använda createelement för att göra en li
        let li = document.createElement("li");
        //fylla li med data.task
        li.textContent = item.task;

        if (item.completed) {
            li.classList.add('completed');
        }

        li.addEventListener('click', () => {
            completeTask(item.id)
        })
        
        //använda createElement för att göra en knapp
        let btnLi = document.createElement("button");

        btnLi.textContent = "X"

        btnLi.addEventListener("click", function(){
            deleteTask(item.id)
        })

        //appenda den till li
        li.appendChild(btnLi);
        //knappen få en eventlistener till removeTask() med id som parameter
        
        //lägger till list in i ul
        list.prepend(li);
    }
}

function deleteTask(id){
    //data arrayen
    data = data.filter((task) => {
        return task.id !== id;
    })
    renderList()
}

function completeTask(id) {
    
    //init ny variabel, 
    var taskToComplete = data.find((task) => {
        return task.id === id
    })

    if (taskToComplete) {

        if(taskToComplete.completed) {
            taskToComplete.completed = false;
        } else {
            taskToComplete.completed = true
        }

        renderList();
    }
}
//körs varje gång dokumentet laddas
document.addEventListener('DOMContentLoaded', function () {
    input.value = ""
    renderList();
    console.log(data.length);
})


//lägg till task funktion, callback till render funktionen
function addTask() {
    //bygga ett objekt

    var objectToAdd = {
        id: data.length + 1,
        task: input.value, //hämta value från input
        completed: false
    }
    
    //rensar input
    input.value = "";
    
    //pusha objeketet till data arrayen
    data.push(objectToAdd)
    
    //återrendera listan, så vi ser uppdateringen
    renderList();
}

btn.addEventListener("click", function () { 
    addTask()
})




//render funktionen körs on load, och som callback till varje funktion

//radera task funktion


// loopa ut data arrayen andra alt:

//for (let x = 0; x < data.length; x++) {

// }

// data.forEach((task) => {

// })