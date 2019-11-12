export const bubbleSort = (array) => {
    let isSorted = false

    while(isSorted === false) {
        isSorted = true
        
    }
}

let arr = []

for (let i = 0; i < 100; i++) {
    let randomNum = Math.floor(Math.random() * (100 - 10) + 10) 
    arr.push(randomNum)
}

console.log(bubbleSort(arr) == arr.sort((a,b) => a-b))
