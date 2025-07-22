const cart = ["Shirt", "Pants", "Shoes"]

createOrder(cart) // createOrder It is an API

.then((orderId) => {
    return proceedToPayment(orderId)  // proceedToPayment It is an API
})
.then((summary) => {
    return showOrderSummary(summary)  //  showOrderSummary( It is an API
})
.then((balance) => {
    return updateBalance(balance)  // updateBalance It is an API
})

.catch(err => console.log(err.message))