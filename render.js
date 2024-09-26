const ul = document.querySelector(".dc-overview");

const existingListItem = document.querySelectorAll(".dc-overview > li")[1];

const num = 56;

// innerHTML
// Adding to the ul and adding it at the end
ul.innerHTML += `<li><strong>You have visited ${num} times</strong></li>`;

// innerAdjacentHTML
// Create a new <li> element
const newListItem = document.createElement('li');
newListItem.textContent = 'I am new'; // Set the text for the new element

// Insert the new <li> at the end of the ul
ul.insertAdjacentElement("beforeend", newListItem);
