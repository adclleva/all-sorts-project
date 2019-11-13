export function bubbleSort(array) {
    let isSorted = false

    while(isSorted === false) {
        isSorted = true

        for (let i = 0; i < array.length - 1; i++) {
            let curNum = array[i];
            let nextNum = array[i + 1];

            if (curNum > nextNum) {
                array[i + 1] = curNum
                array[i] = nextNum
                isSorted = false
            }
        }
    }
    return array
}

let arr = []

for (let i = 0; i < 100; i++) {
    let randomNum = Math.floor(Math.random() * (100 - 10) + 10) 
    arr.push(randomNum)
}

console.log(bubbleSort(arr) === arr.sort((a,b) => a-b))
