import React from 'react'
import './AllSorts.css'
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
        let arrSize = 310
        let barMin = 10
        let barMax = 1000
        
        for (let i = 0; i < arrSize; i++) {
            let randomNum = Math.floor(Math.random() * (barMax - barMin) + barMin) 
            newArr.push(randomNum)
        }
        this.setState({array : newArr})
    }

    render() {
        const { array } = this.state


        return (
            <div className="sorting-container">
                {array.map((num, index) => {
                    return (
                        <div>
                                                       
                        {/* <div
                            className="numbers-display"
                        >{num}</div>
                        <br/> */}
                        <div 
                            className="array-num-bar"
                            key={index}

                            // we have to use inline styling to get the height of the bar
                            // also learned that style attributes accept JS object with camelCase properties
                            // https://reactjs.org/docs/dom-elements.html#style
                            style={{height: `${num}px`}}
                            ></div>
 
                        </div>
                        
                    )
                })}
            </div>
       )
    } 
}

export default AllSorts