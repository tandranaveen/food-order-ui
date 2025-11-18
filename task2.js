const items = document.querySelectorAll('.items');

const platesDisplay = document.getElementById('plates');
const amountDisplay = document.getElementById('amount');

function updateTotal() {
    let totalPlates = 0;
    let totalAmount = 0;

    items.forEach(item => {
        const countLabel = item.querySelector('#countlabel');
        const price = parseInt(item.querySelector('p[data-price]').dataset.price);
        const count = parseInt(countLabel.textContent) || 0;

        totalPlates += count;
        totalAmount += count * price;
    });

    platesDisplay.textContent = `No. of plates: ${totalPlates}`;
    amountDisplay.textContent = `Total amount: ₹${totalAmount}`;
}

items.forEach(item => {
    const increaseBtn = item.querySelector('#increasebtn');
    const decreaseBtn = item.querySelector('#decreasebtn');
    const countLabel = item.querySelector('#countlabel');

    countLabel.textContent = "0";

    increaseBtn.addEventListener('click', () => {
        let currentCount = parseInt(countLabel.textContent);
        currentCount += 1;
        countLabel.textContent = currentCount;
        updateTotal();
    });

    decreaseBtn.addEventListener('click', () => {
        let currentCount = parseInt(countLabel.textContent);
        if (currentCount > 0) {
            currentCount -= 1;
            countLabel.textContent = currentCount;
        }
        updateTotal();
    });
});
