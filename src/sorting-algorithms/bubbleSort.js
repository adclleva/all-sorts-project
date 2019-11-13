export function bubbleSort(array) {
    const animations = []
    
    let isSorted = false

    while(isSorted === false) {
        isSorted = true

        for (let i = 0; i < array.length; i++) {
            
            animations.push([i,false])

            let curNum = array[i];
            let nextNum = array[i + 1];

            if (curNum > nextNum) {

                animations.push([i, true, curNum])
                array[i + 1] = curNum
                array[i] = nextNum
                isSorted = false
            }
        }
    }
    return animations
}

//code below is to check if the sorting algorithm works 

// let arr = []

// for (let i = 0; i < 10; i++) {
//     let randomNum = Math.floor(Math.random() * (100 - 10) + 10) 
//     arr.push(randomNum)
// }

// console.log(bubbleSort(arr) === arr.sort((a,b) => a-b))
// console.log(bubbleSort(arr))