function returnRandom() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(Math.random() > 0.5) {
                resolve('Yes')
            } else {
                reject('No')
            }
        }, 1000)
    })
}

returnRandom().then(value => console.log(value)).catch(error => console.log(error))

const str = Array.from("12345")
console.log(str)

str.forEach(element => {
    console.log(element)    
});