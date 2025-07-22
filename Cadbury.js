const cart = ["Benz"]

createOrder(cart) // createOrder It is an API

.then((orderId) => {
    return proceedToPayment(benz)  // proceedToPayment It is an API
})
.then((summary) => {
    return showOrderSummary(benz)  //  showOrderSummary( It is an API
})
.then((balance) => {
    return updateBalance(benz)  // updateBalance It is an API
})

.catch(err => console.log(err.benz))