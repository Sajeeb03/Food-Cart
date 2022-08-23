const cartArray = [];

function display(cartProduct) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    let totalPrice = 0;
    for (let i = 0; i < cartProduct.length; i++) {

        const name = cartProduct[i].productName;
        const price = cartProduct[i].productPrice;
        // console.log(name, price);
        totalPrice = totalPrice + price;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        <td>${price}</td>
        `
        tableBody.appendChild(tr);
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th></th>
    <td>Price</td>
    <td>${totalPrice}</td>
    `;
    tableBody.appendChild(tr);
}
function addToCart(element) {
    // console.log(element.parentNode.parentNode.children);
    // console.log(element.parentNode.parentNode.children[0].innerText);
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText);
    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
    // console.log(productName, productPrice);

    const foodsObj = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }

    cartArray.push(foodsObj);

    document.getElementById('food-count').innerText = cartArray.length;
    display(cartArray);
}