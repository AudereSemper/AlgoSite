import React, {Component} from 'react';
import './Chart.css';


class Chart extends Component {

    state = {
        columns: [],
    }

    bubbleSort = (inputArr) => {
        let len = inputArr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (inputArr[j] > inputArr[j + 1]) {
                        let tmp = inputArr[j];
                        inputArr[j] = inputArr[j + 1];
                        inputArr[j + 1] = tmp;
                }
            }
        }
        return inputArr;
    };

    toggleOn = () =>{
        this.setState({
            columns: this.props.columns,
        });
        let numbers = this.props.columns;
        this.bubbleSort(numbers);
    }

    render() {

        //riformulare queste tre righe di codice
        //sarebbe opportuno pensare ad un componente bar? 
        

        return (
            <div>
                {numbers.length > 0 ?  
                <div>
                    <button className="sortButton" onClick={this.toggleOn}>Sort with Bubblesort</button>
                    <div className="chart">
                    {bar}
                    </div>
                </div>
                    : null      
                }
            </div>
        );
    }
}

export default Chart;