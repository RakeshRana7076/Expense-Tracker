document.addEventListener('DOMContentLoaded', function() {
  const expenseForm = document.getElementById('expenseForm');
  const expenseList = document.getElementById('expenseList');
  const totalAmount = document.getElementById('totalAmount');

  let expenses = [];

  // Add expense function
  function addExpense(date, category, amount, description) {
    const expense = {
      id: Date.now(),
      date: date,
      category: category,
      amount: parseFloat(amount),
      description: description
    };
    expenses.push(expense);
    updateExpenseList();
    updateTotalAmount();
  }

  // Update expense list
  function updateExpenseList() {
    expenseList.innerHTML = '';
    expenses.forEach(expense => {
      const expenseItem = document.createElement('div');
      expenseItem.classList.add('expense-item');
      expenseItem.innerHTML = `
        <strong>Date:</strong> ${expense.date}<br>
        <strong>Category:</strong> ${expense.category}<br>
        <strong>Amount:</strong> ${expense.amount.toFixed(2)}<br>
        <strong>Description:</strong> ${expense.description}<br>
        <button onclick="deleteExpense(${expense.id})">Delete</button>
      `;
      expenseList.appendChild(expenseItem);
    });
  }

  // Update total amount
  function updateTotalAmount() {
    const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    totalAmount.textContent = total.toFixed(2);
  }

  // Delete expense function
  function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    updateExpenseList();
    updateTotalAmount();
  }

  // Form submit event
  expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(expenseForm);
    const date = formData.get('date');
    const category = formData.get('category');
    const amount = formData.get('amount');
    const description = formData.get('description');
    addExpense(date, category, amount, description);
    expenseForm.reset();
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const bubblesContainer = document.querySelector('.bubbles');

  // Number of bubbles to create
  const numberOfBubbles = 50;

  // Create bubbles dynamically
  for (let i = 0; i < numberOfBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.top = `${Math.random() * 100}%`; // Randomize top position
    bubble.style.left = `${Math.random() * 100}%`; // Randomize left position
    bubble.style.animationDelay = `${Math.random() * 10}s`; 
    bubblesContainer.appendChild(bubble);
  }
});

