const form = document.querySelector(".add-form");
const input = document.querySelector("#input");
const editButton = document.querySelector(".edit-button");
const deleteButton = document.querySelector(".del-button");
const tblBody = document.querySelector("tbody");


let today = new Date();

const formatDate = (dateUTC) =>
{
    const options = {dateStyle: 'long', timeStyle: 'short'};
    const date = new Date(dateUTC).toLocaleString('pt-br', options);
    return date;
}

const createSelect = () =>
{
    let options = ['pendente','em andamento','concluido'];
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

const createCell = () => 
{
    const row = document.createElement("tr");

    for(let i = 0; i <4; i++)
    {
        let cell = document.createElement("td")
        
        row.appendChild(cell);
    }
    tblBody.appendChild(row);
}

function addContent() {

    let firstCell = document.querySelector("tbody tr:last-child td:nth-child(1)");
    let secondCell = document.querySelector("tbody tr:last-child td:nth-child(2)");
    let thirdCell = document.querySelector("tbody tr:last-child td:nth-child(3)");
    let fourthCell = document.querySelector("tbody tr:last-child td:nth-child(4)");


    firstCell.innerHTML = input.value;
    secondCell.innerHTML = `${formatDate(today)}`;
    thirdCell = createSelect();
    fourthCell.innerHTML = `//`;
}

const createTask = () =>
{
    createCell();
    addContent();
}


addEventListener("submit", (form,) =>
{
    form.preventDefault();
    createTask();
})