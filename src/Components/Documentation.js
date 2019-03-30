import React from 'react';
import './Documentation.css';

const Documentation = () => {
    return(
        <div>
            <p className="introduction">
               Bubble sort is a simple sorting algorithm 
               that repeatedly steps through the list 
               should be sorted, compares each pair of 
               adjacent items and swaps them if they are 
               in the wrong order. The pass through the 
               list is repeated until no swaps are needed, 
               which indicates that the list is sorted.
               Do you know why its called as Bubble sort because 
               The smaller value bubbles up to the top of the list,
               while the larger value sinks to the bottom
            </p>
        </div>
    )
}

export default Documentation;