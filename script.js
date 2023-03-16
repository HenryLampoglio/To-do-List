const form = document.querySelector(".add-form");
const input = document.querySelector("#input");
const editButton = document.querySelector(".edit-button");
const deleteButton = document.querySelector(".del-button");
const tblBody = document.querySelector("tbody");



const createCell = () => 
{
    
    
    const row = document.createElement("tr");
    ;

    for(let i = 0; i <4; i++)
    {
        let cell = document.createElement("td")
        
        row.appendChild(cell);
    }
    tblBody.appendChild(row);

    let rows = document.querySelectorAll("tbody tr").length;
    row.setAttribute("id", `${rows.toString()}`);
}

let today = new Date();

const formatDate = (dateUTC) =>
{
    const options = {dateStyle: 'long', timeStyle: 'short'};
    const date = new Date(dateUTC).toLocaleString('pt-br', options);
    return date;
}


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

const createButton = () =>
{
    const cell = document.querySelector("tbody tr:last-child td:nth-child(4)");

    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");

    editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 936v-71l216-216 71 71-216 216h-71ZM120 726v-60h300v60H120Zm690-49-71-71 29-29q8-8 21-8t21 8l29 29q8 8 8 21t-8 21l-29 29ZM120 561v-60h470v60H120Zm0-165v-60h470v60H120Z"/></svg>';
    cell.appendChild(editButton)
    editButton.addEventListener('click', editTask)

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("del-button");
    deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/></svg>';
    cell.appendChild(deleteButton)
    deleteButton.addEventListener('click', deleteTask)
}

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

const createTask = () =>
{
    createCell();
    addContent();
}

const editTask = () =>
{
    let editBtn = document.querySelector(".edit-button")
    console.log(editBtn)
}

const deleteTask = () =>
{
    window.alert("clickou em delete")
}

addEventListener("submit", (form) =>
{
    form.preventDefault();
    createTask();    
})

