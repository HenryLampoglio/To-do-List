const form = document.querySelector(".add-form");
const input = document.querySelector("#input");
const editButton = document.querySelector(".edit-button");
const deleteButton = document.querySelector(".del-button");
let today = new Date();


const formatDate = (dateUTC) =>
{
    const options = {dateStyle: 'long', timeStyle: 'short'};
    const date = new Date(dateUTC).toLocaleString('pt-br', options);
    return date;
}

addEventListener("submit", (form) =>
{
    form.preventDefault();
    console.log(input.value)
    console.log(formatDate(today))
})