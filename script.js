const form = document.querySelector(".add-form");
const input = document.querySelector("#input");
const editButton = document.querySelector(".edit-button");
const deleteButton = document.querySelector(".del-button");
const tblBody = document.querySelector("tbody");


let today = new Date();


const createSelect = () =>
{
    let options = ['pendente','em andamento','concluido'];
    const cell = document.createElement("td");
    let selectList = document.createElement('select');
    cell.appendChild(selectList);

    for(let i = 0; i < options.length; i++)
    {
        let option = document.createElement("option");
        option.value = options[i];
        option.text = options[i];
        selectList.appendChild(option);
    }
}


const formatDate = (dateUTC) =>
{
    const options = {dateStyle: 'long', timeStyle: 'short'};
    const date = new Date(dateUTC).toLocaleString('pt-br', options);
    return date;
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

const addContent = () =>
{
    
    const firstCell = document.querySelector("tbody tr:last-child td:nth-child(1)");
    const secondCell = document.querySelector("tbody tr:last-child td:nth-child(2)");
    const thirdCell = document.querySelector("tbody tr:last-child td:nth-child(3)");
    const fourthCell = document.querySelector("tbody tr:last-child td:nth-child(4)");
}
addEventListener("submit", (form) =>
{
    form.preventDefault();
    createCell();
})