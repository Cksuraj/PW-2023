// Get HTML elements
const nameElem = document.getElementById("name");
const balanceElem = document.getElementById("balance");
const amountElem = document.getElementById("amount");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

// Initialize customer account object
const customer = {
  name: "John Doe",
  balance: 1000
};

// Function to deposit amount into customer's account
function deposit(amount) {
  customer.balance += amount;
  updateBalance();
  console.log(`Deposit of ${amount} successful. New balance is ${customer.balance}`);
}

// Function to withdraw amount from customer's account
function withdraw(amount) {
  if (customer.balance >= amount) {
    customer.balance -= amount;
    updateBalance();
    console.log(`Withdrawal of ${amount} successful. New balance is ${customer.balance}`);
  } else {
    console.log("Insufficient balance.");
  }
}

// Function to update balance on HTML page
function updateBalance() {
  balanceElem.textContent = customer.balance;
}

// Event listener for deposit button click
depositBtn.addEventListener("click", () => {
  const amount = Number(amountElem.value);
  if (amount > 0) {
    deposit(amount);
  }
});

// Event listener for withdraw button click
withdrawBtn.addEventListener("click", () => {
  const amount = Number(amountElem.value);
  if (amount > 0) {
    withdraw(amount);
  }
});
