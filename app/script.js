let invoice = document.getElementById('invoice'),
    Price, Price_rate = 0,
    add = document.getElementById('add'),
    delet = document.getElementById('delet'),
    num_click = 0,
    Total = document.getElementById('Total'),
    Amount_Paid = document.getElementById('Amount_Paid'),
    Balance_Due = document.getElementById('Balance_Due');

onkeyup = () => {
    // to calculate the price

    for (let i = 0; i <= num_click; i++) {
        Price = invoice.children[i].children[1].children[0].value * invoice.children[i].children[2].children[0].value
        invoice.children[i].children[3].children[0].textContent = Price


        // to calculate the price with rate
        Price_rate = Price + Price * (invoice.children[i].children[4].children[0].value / 100)
        invoice.children[i].children[5].children[0].value = Price_rate

        //balance / Total
        let balance_totle = 0;
        for (let i = 0; i < number_delet + 1; i++) {

            balance_totle = balance_totle + invoice.children[i].children[5].children[0].value * 1
            Total.textContent = balance_totle
        }
    }
}


// to add row of invoice
add.addEventListener('click', () => {
    var emptyColumn = document.createElement('div');
    emptyColumn.classList.add('row')
    emptyColumn.classList.add('align-items-center')
    emptyColumn.classList.add('mt-1')
    emptyColumn.classList.add('rounded')

    // creat new row
    emptyColumn.innerHTML =
        '<div class="col border "><input type="text" class="border-0 p-2" placeholder="Description" name="data[services_charges][]"></div>' +
        '<div class="col border"><input type="number" class="border-0 p-2"  step="0.01" placeholder="0" name="data[amount][]"></div>' +
        '<div class="col border"><input type="number" class="border-0 p-2" step="0.01" placeholder="0" name="data[price][]"></div>' +
        '<div class="col border p-2"> <span  class="border-0 p-2">0</span></div>' +
        '<div class="col border"><input type="number" class="border-0 p-2" step="0.01" placeholder="0" name="data[vat][]"></div>' +
        '<div class="col border"> <input type="number" class="border-0 p-2" step="0.0000000001" placeholder="0" name="data[total][]"></div>' +
        '<div class="col-1"><a class="btn btn-danger" id="delet"><span class="far fa-trash-alt"></span></a></div>';
    invoice.appendChild(emptyColumn)
    num_click++;
})

// delet row
delet.addEventListener('click', () => {
    invoice.children[0].remove();
})
onclick = () => {
    delet = document.querySelectorAll('a.delete');
    number_delet = delet.length;
    for (let i = 0; i < number_delet; i++) {
        delet[i].addEventListener('click', () => {
            invoice.children[i].remove();
        })
    }
}


// balance /  Balance Due
Amount_Paid.addEventListener('keyup', () => {
    Balance_Due.textContent = Total.textContent - Amount_Paid.value
})