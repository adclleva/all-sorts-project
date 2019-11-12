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
        let arrSize = window.innerWidth/ 12
        // this checks the screen height, width and number of bars
        // console.log(window.innerWidth, window.innerHeight, arrSize)

        
        let barMin = 10

        // this dynamicall adjusts the size of the array based on the screen hieght
        let barMax = window.innerHeight - 225
        
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

    bubbleSort = (array) => {
        bubbleSort()
    }

    render() {
        const { array } = this.state


        return (
            <div>
                <div className="sorting-container" key={this.getUniqueKey() + 10}>
                    {array.map((num, index) => {
                        return (
                            <div key={this.getUniqueKey()}>                        
                                <div
                                    className="numbers-display"
                                    key={this.getUniqueKey() + index}
                                >{num}</div>
                                <br/>
                                <div 
                                    className="array-num-bar"
                                    key={this.getUniqueKey() + num}
                                    // we have to use inline styling to get the height of the bar
                                    // also learned that style attributes accept JS object with camelCase properties
                                    // https://reactjs.org/docs/dom-elements.html#style
                                    style={{height: `${num}px`}}
                                    ></div>
                            </div>
                        )
                    })}
                </div>

                <div className="menu-container" key={this.getUniqueKey() + 1}>
                    <h3 onClick={this.shuffle}>Shuffle</h3>
                    <h3 onClick={this.bubbleSort}>Bubble Sort</h3>

                </div>
            </div>
       )
    } 
}

export default AllSorts