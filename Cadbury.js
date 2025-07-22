const cart = ["bmw"]

createOrder(cart) // createOrder It is an API

.then((orderId) => {
    return proceedToPayment(bmw)  // proceedToPayment It is an API
})
.then((summary) => {
    return showOrderSummary(bmw)  //  showOrderSummary( It is an API
})
.then((balance) => {
    return updateBalance(bmw)  // updateBalance It is an API
})

.catch(err => console.log(bmw))