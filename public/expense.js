let expenseInput = document.getElementById("expenseAmount");
let descriptionInput = document.getElementById("description");
let categoryInput = document.getElementById("category");

let addExpenseButton = document.getElementById("addExpense");
let expenseList = document.getElementById("expenseList");

let expenses = [];

if (localStorage.expenses) {
  expenses = JSON.parse(localStorage.expenses);
}

addExpenseButton.addEventListener("click", function () {
  let expenseAmount = expenseInput.value;
  let description = descriptionInput.value;
  let category = categoryInput.value;

  let expense = {
    amount: expenseAmount,
    description: description,
    category: category,
  };

  expenses.push(expense);
  localStorage.expenses = JSON.stringify(expenses);
  displayExpenses();
  expenseInput.value = "";
  descriptionInput.value = "";
});

function displayExpenses() {
  expenseList.innerHTML = "";

  for (let i = 0; i < expenses.length; i++) {
    let expense = expenses[i];
    let listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerHTML = `Expense Amount: ${expense.amount}, Description: ${expense.description}, Category: ${expense.category}`;

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = " Delete";
    deleteButton.className = "btn btn-danger";
    deleteButton.addEventListener("click", function () {
      expenses.splice(i, 1);
      localStorage.expenses = JSON.stringify(expenses);
      displayExpenses();
    });

    let editButton = document.createElement("button");
    editButton.textContent = " Edit";
    editButton.className = "btn btn-primary";
    editButton.addEventListener("click", function () {
      expenseInput.value = expense.amount;
      descriptionInput.value = expense.description;
      categoryInput.value = expense.category;
      expenses.splice(i, 1);
      localStorage.expenses = JSON.stringify(expenses);
      displayExpenses();
    });

    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    expenseList.appendChild(listItem);
  }
}

displayExpenses();
