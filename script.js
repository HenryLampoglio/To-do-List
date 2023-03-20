const form = document.querySelector(".add-form");
const input = document.querySelector("#input");
const tblBody = document.querySelector("tbody");


// this function will create the cells where will contains the tasks informations 
const createCell = () => 
{
    
    
    const row = document.createElement("tr");
    ;
    // the for will creat the 4 cells of the row
    for(let i = 0; i <4; i++)
    {
        let cell = document.createElement("td")
        
        row.appendChild(cell);
    }
    tblBody.appendChild(row);

    //here i take the length of the rows in the tbody, and atribute to the row that is being created, to give an id to indetify the row later
    let rows = document.querySelectorAll("tbody tr").length;
    row.setAttribute("id", `n-${rows.toString()}`);
}

let today = new Date();

// this function will treat the date and format to the brazilian time
const formatDate = (dateUTC) =>
{
    const options = {dateStyle: 'long', timeStyle: 'short'};
    const date = new Date(dateUTC).toLocaleString('pt-br', options);
    return date;
}

// this function create a select input inside of one of the cells
const createSelect = () =>
{
    const options = ['pendente','em andamento','concluido'];
    const cell = document.querySelector("tbody tr:last-child td:nth-child(3)");
    const selectList = document.createElement('select');
    cell.appendChild(selectList);
    
    for(let i = 0; i < options.length; i++)
    {
        let option = document.createElement("option");
        option.value = options[i];
        option.text = options[i];
        selectList.appendChild(option);
    }
}

//this function creates the two actions buttons and ad a class, an id and an eventlistener
const createButton = () =>
{
    const cell = document.querySelector("tbody tr:last-child td:nth-child(4)");

    let rows = document.querySelectorAll("tbody tr").length;

    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.setAttribute("id", `n-${rows.toString()}`);
    editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 936v-71l216-216 71 71-216 216h-71ZM120 726v-60h300v60H120Zm690-49-71-71 29-29q8-8 21-8t21 8l29 29q8 8 8 21t-8 21l-29 29ZM120 561v-60h470v60H120Zm0-165v-60h470v60H120Z"/></svg>';
    cell.appendChild(editButton)
    editButton.addEventListener('click', editTask)

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("del-button");
    deleteButton.setAttribute("id", `n-${rows.toString()}`);
    deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/></svg>';
    cell.appendChild(deleteButton)
    deleteButton.addEventListener('click', deleteTask)
}

// this function will take the itens created in the other function and add to the cells
function addContent() {

    let firstCell = document.querySelector("tbody tr:last-child td:nth-child(1)");
    let secondCell = document.querySelector("tbody tr:last-child td:nth-child(2)");
    let thirdCell = document.querySelector("tbody tr:last-child td:nth-child(3)");
    let fourthCell = document.querySelector("tbody tr:last-child td:nth-child(4)");


    firstCell.innerHTML = input.value;
    secondCell.innerHTML = formatDate(today);
    thirdCell = createSelect();
    fourthCell = createButton();
}

//this function just run the two creating functions
const createTask = () =>
{
    createCell();
    addContent();
}

// this function will target the id of the button and edit the text cell at the row with the same id
const editTask = (evt) =>
{
    let editBtnValue = evt.currentTarget.id;
    let editText = prompt("insira as alterações da tarefa","edite a tarefa");
        if(editText == null || editText == "")
        {
            alert("você nao alterou a tarefa")
        }
        else
        {
            let editCell = document.querySelector(`tr#${editBtnValue} td:first-child`)
            editCell.innerHTML = editText;
        }
    
}

// this function target the id of the delete button clicked and erase all the row content
const deleteTask = (evt) =>
{
    let delBtnValue = evt.currentTarget.id;
    let row = document.querySelector(`tr#${delBtnValue}`)
    
    row.remove();
   
}

// this eventlistener create the base task
addEventListener("submit", (form) =>
{
    form.preventDefault();
    createTask();    
})

