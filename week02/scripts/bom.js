// Set up
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Events
button.addEventListener('click', function() {
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    const inputValue = input.value;
    if (inputValue.trim() !== "") {
        listItem.textContent = inputValue;
        deleteButton.textContent = "❌";

        listItem.append(deleteButton);
        list.append(listItem);
        input.value = "";

        deleteButton.addEventListener('click', function() {
            list.removeChild(listItem);
            input.focus();
            input.value = "";
        });
        
    }
    else {
        return input.focus();
    }
});




