import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    state = {
        arraySize: 0,
        myArray: [],
    }

    setArraySize = (event) => {
        event.preventDefault();

        this.setState({
            arraySize: event.target.value,
        })
    }

    generateArray = () => {
        this.setState({myArray:[]})

        let newArray = [];    

        for(let i = 0; i<this.state.arraySize; i++){
            let randomValue = Math.floor(Math.random() * 100);
            newArray.push(randomValue);   
        }

        this.setState({myArray:newArray}, 
            () => { this.props.getPropsFromChild(this.state.myArray); 
        })
    }

    sendArrayToParent = () => {
        this.props.getPropsFromChild(this.state.myArray);
    }

    render() {
        return(
            <div className="form">
                <button className="formButton" onClick={this.generateArray}>Generate random numbers</button>
                <form>
                    <label>
                        Size of the array  
                        <input type="text" name="firstValue" onChange={this.setArraySize}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default Form;