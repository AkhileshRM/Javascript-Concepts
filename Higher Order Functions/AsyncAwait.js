const API = "https://dog.ceo/api/breeds/image/random"

const  handlePromise = async() => {
    try{
        const response = await fetch(API)  // returns first Promise
        const data = await response.json() // returns second Promise 
        console.log(data)
    }
    catch(err) {
        console.log(err, "Error occurred")
    }
   
}

handlePromise()