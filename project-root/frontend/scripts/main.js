function addGuest() {
    const guestName = document.getElementById('guest-name').value;
    const guestListContainer = document.getElementById('guest-list-container');
    const listItem = document.createElement('li');
    listItem.textContent = guestName;
    guestListContainer.appendChild(listItem);
    document.getElementById('guest-name').value = '';
}

function addActivity() {
    const activity = document.getElementById('activity').value;
    const programList = document.getElementById('program-list');
    const listItem = document.createElement('li');
    listItem.textContent = activity;
    programList.appendChild(listItem);
    document.getElementById('activity').value = '';
}

function addExpense() {
    const expense = document.getElementById('expense').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const budgetList = document.getElementById('budget-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${expense}: $${amount.toFixed(2)}`;
    budgetList.appendChild(listItem);
    document.getElementById('total-budget').textContent = (parseFloat(document.getElementById('total-budget').textContent) + amount).toFixed(2);
    document.getElementById('expense').value = '';
    document.getElementById('amount').value = '';
}
