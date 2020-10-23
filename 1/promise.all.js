//Promise.all
const getFirstName = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            return (true) ? resolve("Myraas") : reject(Error("First Failure"))
        }, 1000)
    })
    return promise;
}

const getLastName = (first) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return (true) ? resolve(`${first} Academy`) : reject(Error("Second Failure"))
        }, 1000)
    })
}

const handleOnClick = () => {
    try {
        console.log("Klikked")
        var a = getFirstName().then(first =>getLastName(first))
        var b = a.then(result => {
        document.querySelector("#result").innerText = result
    })
    Promise.all([a,b]).then(console.log(`success`)) 
    } catch (error) {
        console.log(err)
    }      
}