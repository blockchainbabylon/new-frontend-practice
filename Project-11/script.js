const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

let total = 0;

function addExpense() {
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    if (!name || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid expense name and amount!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${name}: $${amount.toFixed(2)}
        <button class="delete-btn">X</button>
    `;
    expenseList.appendChild(li);

    total += amount;
    totalAmount.textContent = total.toFixed(2);

    const deleteBtn = li.querySelector(".delte-btn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
        total -= amount;
        totalAmount.textContent = total.toFixed(2);
    });

    expenseNameInput.value = "";
    expenseAmountInput.value = "";
}

addExpenseBtn.addEventListener("click", addExpense);

expenseNameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        expenseAmountInput.focus();
    }
});

expenseAmountInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addExpense();
    }
});