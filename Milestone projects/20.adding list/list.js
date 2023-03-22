// Array of list items
const listItems = ['HTML and Semantics', 'Starting with CSS', 'Working Template',
 'Mobile responsive webpages','Grid and Flex-box in CSS', 'Projects using HTML & CSS','Version Control and Git'];
let counter = 0;

document.getElementById("add-button").addEventListener("click", addListItem);

function addListItem() {
  if (counter >= listItems.length) {
    alert("All items have been added!");
    return;
  }

  // Add new list item
  const newItem = document.createElement("li");
  newItem.textContent = listItems[counter];
  document.getElementById("list").appendChild(newItem);

  // Increment counter for next item
  counter++;
}
