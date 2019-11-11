import React from 'react'

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
        let arrSize = 100
        let barMin = 1
        let barMax = 100
        
        for (let i = 0; i < arrSize; i++) {
            let randomNum = Math.floor(Math.random() * (barMax - barMin) + barMin) 
            newArr.push(randomNum)
        }
        this.setState({array : newArr})
    }

    render() {
        const { array } = this.state


        return (
            <div>
            {array.map((num, index) => {

                return (
                <div key={index}>{num}</div>
                )
            })}
 
            </div>
       )
    } 
}

export default AllSorts