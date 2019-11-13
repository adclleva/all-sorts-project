import React from 'react'
import './AllSorts.css'
import {bubbleSort} from '../../sorting-algorithms/bubbleSort.js'


class AllSorts extends React.Component {
    constructor() {
        super()
        this.state = {
            array: []
        }
    }

    componentDidMount = () => {
        this.generateArr()
    }

    

    generateArr = () => {
        let newArr = []
        // this dynamicall adjusts the size of the array based on the screen width
        const arrSize = window.innerWidth/ 12 // 12 is the number that looks best

        // this checks the screen height, width and number of bars
        // console.log(window.innerWidth, window.innerHeight, arrSize)

        
        const barMin = 10 

        // this dynamicall adjusts the size of the array based on the screen hieght
        let barMax = window.innerHeight - 225 // 225 is what helped fits everything
        
        for (let i = 0; i < arrSize; i++) {
            let randomNum = Math.floor(Math.random() * (barMax - barMin) + barMin) 
            newArr.push(randomNum)
        }
        this.setState({array : newArr})
    }

    shuffle = () => {
        this.generateArr()
    }

    // https://gist.github.com/6174/6062387
    // utilized this to get a unique random key
    getUniqueKey = () => {
       return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }

    bubbleSortAnimation = () => {
        const { array } = this.state
        const animations =  bubbleSort(array) 

        for (let i= 0; i < animations.length - 1; i++) {
            const arrayBars = document.getElementsByClassName('array-num-bar')
            const currentBarIndex = animations[i]
            const nextBarIndex = animations[i + 1]
            const currentBarStyle = arrayBars[currentBarIndex].style
            const nextBarStyle = arrayBars[nextBarIndex].style
            const currentColor = i % 2 === 0 ?  "green" : "purple"
            const nextColor = i % 2 === 0 ?  "black" : "yellow"
            setTimeout(() => {
                currentBarStyle.backgroundColor = currentColor
                currentBarStyle.height = `${i}px`
                
            },i * 10)
      
        }
        

        // console.log(newArr === array.sort((a,b) => a-b)) to test that it's working
        
        // this.setState({array: newArr})
    }

    testSortMethods = () => {
      
    }



    render() {
        const { array } = this.state


        return (
            <div>
                <div className="sorting-container" >
                    {array.map((num, index) => {
                        return (
                            /* Solved this error Warning: Each child in a list should have a unique "key" prop. */
                            <div key={this.getUniqueKey()}>                        
                                <div
                                    className="numbers-display"
                                    
                                >{num}</div>
                                <br/>
                                <div 
                                    className="array-num-bar"
                                    // we have to use inline styling to get the height of the bar
                                    // also learned that style attributes accept JS object with camelCase properties
                                    // https://reactjs.org/docs/dom-elements.html#style
                                    style={{height: `${num}px`}}
                                    ></div>
                            </div>
                        )
                    })}
                </div>

                <div className="menu-container" >
                    <h3 onClick={this.shuffle}>Shuffle</h3>
                    <h3 onClick={this.bubbleSortAnimation}>Bubble Sort</h3>

                </div>
            </div>
       )
    } 
}

export default AllSorts